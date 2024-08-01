#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "studio";
const char* password = "88888888";

String url = "http://localhost:3000/api/movimiento/"

char salidaJson[128];


void setUp(){
    String id = "" //obtener id de usuario;
    Serial.begin(1152200);
    WiFi.begin(ssid, password);
    Serial.print("Conenctando...");

    while (WiFi.status() != WL_CONNECTED){
        delay(500);
        Serial.print(".")
    }

    Serial.print("Conectado con exito, mi IP es: ");
    Serial.print(WiFi.localIP());

}

void loop(){

    String nivel = "" //get temperatura;
    String fechaHora = ""//get fecha y hora;

    if((WiFi.status()== WL_CONNECTED)){
        HTTPClient client;

        client.begin(url, id);
        client.addHeader("Content-Type", "application/json");

        const size_t capacity = JSON_OBJECT_SIZE(2)
        StaticJsonDocument<capacity> doc;

        JsonObject object = doc.to<JsonObject>();
        object ["nivel"] = nivel;
        object["fechaHora"] = fechaHora;

        serializeJson (doc, salidaJson);

        serial println(salidaJson);

        int httpCode = client.PUT(String(salidaJson));

        if(httpCode > 0){
            Serial.println("\nStatuscode: " + String(httpCode));
            client.end();
        } else {
            Serial.println("Error en la solicitud http");
        }
    } else {
        Serial.println("conexión perdida");
    }
    delay (10000);
}