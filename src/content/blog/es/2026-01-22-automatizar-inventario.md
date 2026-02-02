---
title: Cómo automaticé el inventario de mi cliente en 2 semanas
description: Case study de cómo transformamos 20 horas semanales de trabajo
  manual en Excel a un sistema automatizado. Lecciones aprendidas y ROI real.
publishDate: 2026-01-22
author: Nestor Cabrera
image: /images/uploads/1443413.png
tags:
  - automatización
  - caso de estudio
  - python
  - productividad
draft: false
lang: es
---

# Cómo automaticé el inventario de mi cliente en 2 semanas

**El problema:** Una distribuidora regional manejaba 500+ SKUs en Excel. 20 horas semanales dedicadas solo a actualizar hojas de cálculo.

**La solución:** Sistema web automatizado con lógica FIFO, alertas inteligentes y dashboard en tiempo real.

**El resultado:** 90% reducción en tiempo administrativo. ROI en 4 meses.

Esta es la historia completa.

## El contexto

Mi cliente (distribuidora de alimentos) me contactó con un problema específico:

*"Pasamos 20 horas a la semana solo actualizando Excel. Y aún así cometemos errores. Los productos se vencen antes de rotarlos. Necesitamos automatizar esto."*

Primera reunión: 2 horas entendiendo su operación actual.

### El flujo manual (antes)

1. **Entrada de productos:** Anotar manualmente en Excel (SKU, cantidad, fecha de vencimiento)
2. **Salidas:** Buscar en 5+ hojas cuál producto sale primero (FIFO)
3. **Reorden:** Calcular manualmente cuándo pedir más
4. **Reportes:** Copiar/pegar datos para enviar a gerencia

**Puntos de dolor:**
- Errores de tipeo frecuentes
- Imposible saber inventario en tiempo real
- No había alertas de vencimiento
- El Excel colapsaba con más de 1000 registros

## La propuesta: MVP en 2 semanas

En vez de vender un "sistema ERP completo" (que tomaría meses), propuse un MVP:

**Semana 1:** Sistema básico de entrada/salida con FIFO automático
**Semana 2:** Dashboard + alertas + migración de datos

Presupuesto: $2,500 USD (vs $6,000+ de ERPs genéricos)

## El desarrollo

### Decisiones técnicas

**Stack elegido:**
- **Frontend:** React + Vite (rápido de desarrollar, responsive)
- **Backend:** Python + FastAPI (excelente para lógica de negocio)
- **Base de datos:** PostgreSQL (triggers para FIFO automático)
- **Deploy:** Railway (setup de 10 minutos)

**Por qué este stack:**
- Python porque el cliente ya tenía scripts en Python
- PostgreSQL porque necesitábamos lógica FIFO en DB (no en app)
- React porque necesitaban móvil-responsive

### La lógica FIFO (el core del problema)

El desafío más grande: implementar FIFO que considerara:
1. Fecha de entrada
2. Fecha de vencimiento
3. Lote del proveedor

Solución: Trigger en PostgreSQL que calculaba prioridad automáticamente.

```sql
-- Simplificado para el ejemplo
CREATE TRIGGER calculate_fifo_priority
BEFORE INSERT ON inventory
FOR EACH ROW
EXECUTE FUNCTION set_fifo_priority();
```

Cada vez que entra un producto, se le asigna prioridad considerando ambas fechas.

### El dashboard

Lo más crítico para el cliente: **visibilidad instantánea**.

Componentes clave:
1. **Vista de inventario actual** (filtrable por categoría, proveedor)
2. **Alertas visuales** (vence en 7/3/1 día)
3. **Productos bajo stock** (basado en histórico de ventas)
4. **Métricas de rotación** (productos lentos vs rápidos)

Todo actualizado en tiempo real (sin recargar página).

## La migración de datos

Tenían 2 años de histórico en Excel. 3,000+ registros.

Proceso:
1. Script Python para limpiar/validar datos
2. Importación en lotes (500 registros/vez)
3. Validación manual de los primeros 100

Tiempo total de migración: 4 horas.

## El entrenamiento

No sirve de nada un sistema si nadie lo usa.

**Capacitación (4 horas total):**
- Sesión 1: Flujo básico entrada/salida (2h)
- Sesión 2: Dashboard y reportes (1h)
- Sesión 3: Troubleshooting común (1h)

Plus: Video tutoriales de 5 minutos para cada función.

## Los resultados (después de 3 meses)

### Métricas cuantitativas

- **De 20h a 2h semanales** en administración de inventario
- **15% reducción en merma** (productos vencidos)
- **Cero errores** de rotación FIFO
- **ROI en 4 meses** ($2,500 vs $1,200/mes en tiempo ahorrado)

### Métricas cualitativas

- **Visibilidad total:** Gerencia puede ver inventario desde su celular
- **Decisiones basadas en datos:** Reportes automáticos de rotación
- **Escalabilidad:** Pueden agregar 1000+ SKUs sin problema

## Lecciones aprendidas

### ✅ Lo que funcionó bien

1. **MVP primero:** Validar la solución core antes de agregar features
2. **Automatizar en DB:** FIFO en PostgreSQL fue más rápido que en código
3. **Capacitación gradual:** Videos cortos > manual de 50 páginas
4. **Deploy simple:** Railway permitió iterar rápido sin DevOps complejo

### ⚠️ Lo que mejoraría

1. **Más tiempo de testing:** Encontramos edge cases en producción
2. **Módulo de predicción:** Querían predicción de demanda (fase 2)
3. **Integración con proveedores:** Quedó manual por limitaciones de APIs

## ¿Qué sigue?

El cliente ya autorizó Fase 2:

- **ML para predicción de demanda** (cuánto pedir según histórico)
- **App móvil** para inventario físico en bodega
- **Integración con e-commerce** (ventas B2B)

Pero lo importante: el MVP resolvió el 80% del problema en 2 semanas.

## Aplicable a tu negocio

Este caso es replicable si tu negocio tiene:

✅ Procesos manuales repetitivos
✅ Datos en Excel/Google Sheets
✅ Necesidad de visibilidad en tiempo real
✅ Equipo dispuesto a cambiar flujos

**No necesitas un ERP de $50k.** Muchas veces un sistema custom enfocado en TU problema específico es mejor (y más barato).

---

**¿Tu negocio tiene procesos similares que podrían automatizarse?**

[Agenda un diagnóstico gratuito →](/sobre/#contacto)

Analizaremos tu operación y te diré honestamente si software custom es la solución o si hay alternativas más simples.
