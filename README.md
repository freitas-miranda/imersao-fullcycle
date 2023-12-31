# Imersão Full Stack && Full Cycle 

## Tecnologias
- [x] Docker
- [x] Next.js
- [x] Nest.js
- [x] Apache Kafka
- [x] GoLang
- [x] SSE (Server Sent Events)

---
## Fluxo de comunicação
```mermaid
sequenceDiagram
    participant User
    participant HomeBroker
    participant NestJS
    participant Kafka
    participant MicroservicesEmGo
    User->>HomeBroker: Negociação (React/Next.js)
    HomeBroker->>NestJS: Compra/venda/consultas (REST)
    NestJS->>Kafka: Publica ordens (compra/venda)
    Kafka->>MicroservicesEmGo: Consome ordens (compra/venda)
    MicroservicesEmGo->>Kafka: Publica matches das ordens
    Kafka->>NestJS: Consome ordens processadas
    NestJS->>HomeBroker: SSE (Service Sents Events)
    HomeBroker->>User: Recebe resposta da negociação 
```
