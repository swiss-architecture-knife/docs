---
sidebar_position: 40
---

# Filesystem

By default, each piece of content must be stored in the directory `app/swark/_default`. You can configure another location by setting the variable 'content.path' in your `config/swark.php`.

You can either deploy your swark instance with the content in it our put your content into another Git repository and then pull that repository into your swark instance.

## Organizing your content directories
swark uses Laravel's named routes to find the correct subdirectory containing your content.
Each page has a named route which something like `swark.strategy.index`. That named route maps to the relative URL `/swark/strategy`. On the command line, you can execute `php artisan route:list | grep swark` to find all relevant routes, e.g.

```bash
  GET|HEAD   swark/glossary ................................................................... swark.glossary.index › Swark\Http\Ui\GlossaryController@index
  GET|HEAD   swark/infrastructure/baremetals .................. swark.infrastructure.baremetal.index › Swark\Http\Ui\Infrastructure\BaremetalController@index
  GET|HEAD   swark/infrastructure/clusters ........................ swark.infrastructure.cluster.index › Swark\Http\Ui\Infrastructure\ClusterController@index
  GET|HEAD   swark/infrastructure/clusters/{cluster} ............ swark.infrastructure.cluster.detail › Swark\Http\Ui\Infrastructure\ClusterController@detail
  GET|HEAD   swark/infrastructure/resources/{resource_type} ..... swark.infrastructure.resource.index › Swark\Http\Ui\Infrastructure\ResourceController@index
  GET|HEAD   swark/infrastructure/system-landscape ................. swark.infrastructure.index › Swark\Http\Ui\Infrastructure\InfrastructureController@index
  GET|HEAD   swark/it-architecture .................................. swark.it_architecture.index › Swark\Http\Ui\Architecture\ITArchitectureController@index
  ...
  GET|HEAD   swark/strategy .......................................................... swark.strategy.index › Swark\Http\Ui\Strategy\StrategyController@index  
```

To change some content for the `swark.strategy.index` route, simply navigate to `${content.path}/swark/strategy/index`.

## Chapters
If a chapter's content is only included, you have to create a file with the name of its chapter's id. For example, if you want to change the content of the chapter `introduction` in the page `swark.strategy.index`, create a file `${content.path}/swark/strategy/index/introduction.md`. You can either use `md`, `html` or `blade.php` as a file extension.

### Adding content before or after a chapter
It may be the case that your page's layout already defines a content for a given chapter. For example, if some data tables are displayed or an infrastructure diagram is automatically rendered.
Instead of modifying that page's layout to insert content before or after this automatically generated data, you can use one those well-defined filenames:

| Filename | When displayed |
| --- | --- |
| `${chapter_id}-before-chapter.blade.php` | Before the current chapter's header |
| `${chapter_id}-before.blade.php` | Before the current chapter's body |
| `${chapter_id}-after.blade.php` | After the current chapter's body |

If you want to add some content before the `introduction` chapter, you would have to create a file `${content.path}/swark/strategy/index/introduction-before.blade.php`.

## Dynamic content
The previous section only dealt with a page which is unique in your whole swark instance. This may be some kind of global introduction, a glossary, some Jira issue aggregation.
But what happens if you want to modify some content which is specific for exatly one of your configuration items?
Based upon the current route's parameters, swark locates the content in the correct subdirectory.

Let's say you want to add some remarks about your configuration item `cluster` with its id `1`. From the output above, this maps to `swark.infrastructure.cluster.detail` and has a route parameter named `{cluster}`:

```bash
  GET|HEAD   swark/infrastructure/clusters/{cluster} ............ swark.infrastructure.cluster.detail › Swark\Http\Ui\Infrastructure\ClusterController@detail
```

Again, navgiate to `${content.path}/swark/infrastructure/cluster/detail/1/` and create a file named `overview-after.blade.php`. As discussed before, it will only render when the cluster with ID `1` is shown.

### Scomp IDs
Dealing with numeric IDs like `1` does not reflect the real world. You have probably one internal name for your cluster, e.g. `dc1-esx-primary`. swark uses the concept of _scomp IDs_. They must be unique for every type and you can assign your cluster that very internal name as a scomp ID.
Instead of using `<...>/cluster/detail/1/` you can then *also* use the folder `cluster/detail/dc1-esx-primary/` for your content.
If content of the same type for the same configuration item is loaded, then your scomp-identified content has precedence.