swark has a lot of types to define software and IT strategy and architectures.

# Strategic thinking
## Strategy
A `strategy` is something you want to achieve in a few years or months.

## Question
Each `strategy` may have one or more `questions` which might have to be answered. They may be the reason why a strategy should be identified in the first place.
You can assign each `question` to any of your `strategies`.

## Objective
During your analysis you are (hopefully) able to answer the `questions` and then derive a meaningful number of objectives for your `strategy`.

# Measuring your strategy
`Objectives` are meaningless if you are not able to measure them. `swark` allows you to define metrics which then can be measured in recurring periods.

## Metric
A `metric` defines a measurable item. The measurement can be of a given type (`boolean`, `integer` or `percentage`) and you can define if a higher value is better or a lower value. 
`Metrics` are something like `Number of total applications secured with MFA`.

## KPI
For each of your strategic `objectives`, you can use any of your metrics and assign a target goal value and thresholds. You can re-use the same `metric` for different `strategies`.

## Period
`Periods` define a time period in which the KPIs have been measured. You can compare the KPI measurements between different `periods`.

## Measurement
For a given `KPI` in a `period`, you measure the value of your `metric`.

# Compliance
VaIT, DORA, NIS2, some other certification. You name it.

## Regulation
A `regulation` is e.g. NIS2.

## Chapter
Each `regulation` has a number of chapters with content in it.

## Control
Based upon each `chapter`, the regulation may derive a number of `controls`. 

## Risk
For any number of `controls` you can define the `risk` and if you accept those `risks`. 

# Actions
## Action
This is something you have to do. `swark` is neither Atlassian Jira nor any of the numerous task and project management frameworks out there.
Think of `actions` as something what has to be done. `Actions` can be assigned to any `control` or `objective`.

# Data management
## Data classification
TBD

# IT

For the IT and software architecture part of `swark`, we provide you with C4-related elements 

## Actor

An `Actor` is someone from the outside who can interact with one of the other architecture's elements.

| Aspect      | Description                     |
|-------------|---------------------------------|
| Perspective | Enterprise architect            |
| C4 analogy  | In C4, an `Actor` is a `Person` |

## Technology

A `Technology` is a `protocol`, `language`, `framework`, `data-format`, `concept` or any `other` you can think of.
Typical candidates for a `technology` are

- `HTTP` as a `protocol`
- `C#` as a `language`
- `.NET Standard` as a `framework`
- `IP` as a `protocol`
- `Kafka` as `protocol`
- `MySQL` as `protocol`

You might notice that `MySQL` is a little bit blurry. From a network layer perspective, `MySQL` is a protocol - but is
also a
software.
For `MySQL` you would then have multiple software packages using this technology, e.g. `MySQL Server` and `MariaDB`.

| Aspect       | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| Perspective  | IT/Network/Software architect                                                                  |
| Has versions | Each `technology` can have any number of versions, e.g. for `HTTP` this can be `1.1` and `2.0` |
| C4 analogy   | `Technology` directly relates to C4's `technology` keyword                                     | 

## Protocol stack

A `Protocol stack` consists of multiple `technologies` in their specific versions. With this you can describe a detailed
communication between different applications.
Typical candidates for a `protocol stack` are

- `REST/JSON over HTTPS` with `JSON`, `HTTP`, `TLS`, `TCP`, `IP` as used technologies
- `MySQL` with `MYSQL`, `MySQL`, `TLS`, `TCP`, `IP` as used technologies

| Aspect      | Description                                                                          |
|-------------|--------------------------------------------------------------------------------------|
| Perspective | Network architect, DevOps engineer                                                   |
| C4 analogy  | `Protocol stack` is a more detailed and structured type of C4's `technology` keyword | 

## Resource type

Software requires different elements to run: a runtime environment, the software package itself and any number of 3rd
party resources.
`Resource types` are used to model a provided resource by some element.
Typical candidates are

- `Database schema`
- `MySQL database schema` with `MySQL` as referenced `technology`
- `Message queue`
- `Kafaka topic` with `Kafka` as referenced `technology`

| Aspect      | Description                                  |
|-------------|----------------------------------------------|
| Perspective | Enterprise architect, Software architect     |
| C4 analogy  | A C4's `container` matches a `resource type` | 

## Stage

During software development, each software runs through different `stages`, so it can be inspected and used by a
different audience. `Stages` are the __horizontal view__ of an application lifecycle.
Typical candidates are

- DEV
- TEST
- PROD

| Aspect      | Description                                    |
|-------------|------------------------------------------------|
| Perspective | Software architect, DevOps engineer            |
| C4 analogy  | In C4, a `stage` is a `deployment environment` | 

## Layer

In contrast to `stages`, `layers` are assigned to `software components` and represent the __vertical view__ of a
software architecture.
Typical candidates are

- DAO
- Service layer
- Backend
- API
- Frontend

| Aspect      | Description        |
|-------------|--------------------|
| Perspective | Software architect |
| C4 analogy  | No analogy in C4   | 

## Software

In `swark`, a `software` is any piece which can be installed or executed. Most often, a `software` is only a single
unit.
Each software belongs to a usage category (`console`, `webapp`, `server`, `client`, `mobile`) and may have a special
purpose.

Depending upon the activated purposes of the software, you can assign the software to different elements in your
architecture.

| Purpose                   | Description                                                                |
|---------------------------|----------------------------------------------------------------------------|
| `Virtualization software` | `Hosts` can use software with `Virtualization` as a parent host            |
| `Operating system`        | Software with `Operating system` can directly run on `Hosts`               |
| `Runtime`                 | Other software can run inside the runtime (e.g. Kubernetes, Apache Tomcat) |
| `Library`                 | *Not used yet*                                                             |

Typical candidates for a `software` are

- MariaDB
- Microsoft SQL Server
- Kubernetes

As you can see, `Kubernetes` is obviously not a single unit and can not be executed as just one binary.

| Aspect       | Description                                  |
|--------------|----------------------------------------------|
| Perspective  | Software architect                           |
| Has versions | Each `software` can have multiple `releases` |
| C4 analogy   | `software` maps to C4's `softwareSystem`     | 

### Component

Each software consists upon a number of `components`. Depending upon your software architecture, this could be Java
modules, .NET projects or even namespaces. Please note that a nesting of components is not possible.
Each component can use and provide a number of technologies in their belonging version and can be assigned to
multiple `layers` of your software architecture.

| Aspect      | Description                          |
|-------------|--------------------------------------|
| Perspective | Software architect                   |
| C4 analogy  | `component` maps to C4's `container` | 

### Service

Each component can have a number of `services`. A service can be used with a `protocol stack`. You can make a
relationship from `actors`, `systems` and `software` to a `service`.
Think of services as available endpoints, e.g.

- HTTP endpoint
- API endpoint

| Aspect      | Description                              |
|-------------|------------------------------------------|
| Perspective | Enterprise architect, Software architect |
| C4 analogy  | incoming relationships to a `container`  | 

## System

In more complex cases, `software` does not run as a single binary but consists upon multiple software and resource
elements. Therefore, `swark` provides you with the `system` element. Each system consists upon assigned `software`
elements and `resource types`.

A system `Time management` could consist of

- `Software`: MariaDB
- `Software`: MyTimeManagementApp
- `Resource Type`: MySQL database schema

| Aspect      | Description                                                                           |
|-------------|---------------------------------------------------------------------------------------|
| Perspective | Enterprise architect                                                                  |
| C4 analogy  | C4's most fitting analogy is somewhere between `systemLandscape` and `softwareSystem` | 

## Release trains

`Release trains` bundle different software versions and can be assigned to a parent `system`.

| Aspect      | Description                         |
|-------------|-------------------------------------|
| Perspective | Release management, DevOps engineer |
| C4 analogy  | No analogy in C4                    | 


## Allowed relationships

| From \ To ->  | Actor | System | Software | Component | Service | Resource Type |
|---------------|-------|--------|----------|-----------|---------|---------------|
| Actor         | x     | x      | x        | -         | x       | -             |
| System        | -     | x      | -        | -         | x       | -             |
| Software      | -     | x      | x        | -         | x       | x             |
| Component     | -     | -      | -        | x         | x       | x             | 
| Service       | -     | -      | -        | -         | -       | x             |
| Resource Type | -     | -      | -        | -         | -       | -             |
