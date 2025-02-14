# Mapping of C4's data model in swark

| Configuration Item Type in swark              | C4                                                |
|-----------------------------------------------|---------------------------------------------------|
| Actor, Organization                           | Person `person`                                   |
| Region, Availability Zone, Application Group  | Group `group`                                     |
| System                                        | Software system `softwareSystem`                  |
| Software, Cluster                             | Container `container`                             |
| Component                                     | Component `component`                             |
| Stage, Zone                                   | Deployment environment `deploymentEnvironment`    |
| Cluster                                       | Deployment group `deploymentGroup`                |
| Host, Runtime                                 | Deployment node `deploymentNode`                  |
| Baremetal                                     | Infrastructure node `infrastructureNode`          |
| Application instance, Cloud offering instance | Software system instance `softwareSystemInstance` |
| Application instance, Cloud offering instance | Container instance `containerInstance`            |
| Layer                                         | -                                                 |
| Artifact type                                 | -                                                 |
| Cloud offering                                | -                                                 |
| Resource                                      | -                                                 |
| Resource type                                 | -                                                 |