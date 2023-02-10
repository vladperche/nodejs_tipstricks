# Building Mongo Docker

Run in prompt, in the same folder of the `dockerfile`:

```
docker build -t my_mongo:latest .
```

# Running Mongo Docker

Run in prompt:

```
docker run --name my_mongo_instance --interactive --publish 27017:37017 my_mongo:latest
```

# Listind databases

On a Terminal of a running docker container, execute:

```
# mongosh
> db.adminCommand( { listDatabases: 1 } )
```

# List Collections

On a Terminal of a Runing docker container, execute:

```
# mongosh
> db.runCommand({ listCollections: 1 })
```
