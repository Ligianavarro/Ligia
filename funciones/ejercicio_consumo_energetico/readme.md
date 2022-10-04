# Cálculo de consumo energético:
Realice un programa que, sin necesidad de instanciar una clase, permita el cálculo de consumo energético de un determinado electrodomestico.
Tenga en cuenta que para saber cuanto nos cuesta un electrodomestico en el recibo de la luz, es necesario que sepa aproximadamente cuanto tiempo (en horas) esta encendido ese equipo al mes. Por ejemplo, la nevera suele estar conectada todos los dias, su consumo al mes en horas es: 24*30 = 720 horas al mes. Tambien es necesario conocer la potencia de su electrodoméstico en vatios [W], la nevera tiene una potencia de 250 W a 350 W. El calculo es el siguiente:

```
consumo = tiempoEnHoras*potenciaEnKilovatios*costoKilovatio
```

## Actividades a realizar
1) Revise la factura de la luz, encuentre el valor que le cobra la electrificadora por cada Kilovatio [KW].
2) Busque un electrodomestico y calcule cuanto tiempo lo usa al mes. Recuerde que el tiempo debe estar en horas.
3) Encuentre la potencia del electrodoméstico, este valor esta dado en vatios [W].
4) Cree un método que tenga como parametros: el tiempo de uso al mes en horas, la potencia del electrodoméstico en vatios y el valor de que cobra la electrificadora por cada kilovatio consumido. el método debe calcular el costo energético mensual de un electrodoméstico.


## Codigo de prueba
Inserte el siguiente codigo en el metodo main.

```
System.out.println("El costo energético mensual es: " Electrodomestico.costoEnergeticoMensual(30,240,700))
```
Tener en cuenta, 30 es el consumo en horas de un cargador, el valor de 240 pertenece a los vatios de un cargador de celular y 700 es el valor en pesos del kilovatio.

## Extras
- Potencia de electrodomesticos en casa [DelftStak](https://www.worten.es/blog/1645/cual-es-la-potencia-de-los-electrodomesticos-de-casa/)
- Tener en cuenta que la conversion, si un computador consume 500 W, en la formula hay que convertirlo a kilovatios, es decir, 0.5 KW
