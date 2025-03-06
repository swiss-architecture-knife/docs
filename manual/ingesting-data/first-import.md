# Importing stamdata and configuration items


## Import public stamdata
swark ships with a set of public stamdata which can be used in almost all environments. Specifically, we are providing some sets of regulations (NIS2 at the moment) which you can import and then re-use in your architecture.

Execute the following command on the command line:

```bash
php artisan app:import default-importables/
```

## Import private stamdata (configuration items, default content)
swark is only a tool for the information how your world look like. In most cases it is much easier to define every relvant configuration item in an Excel file, than adding everything through a UI.

When you ran the following command
```bash
php artisan app:import ${IMPORT_PATH}
```

it will look for a file called `${IMPORT_PATH}/import.xlsx` and imports everything in it.
In addition to that it also imports static content from `${IMPORT_PATH}/regulations/${REGULATION_SCOMP_ID}`.