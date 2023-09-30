#!/bin/bash

echo "Starting the database..."

docker-compose up -d

sleep 10

echo "Managing the database..."
dotnet ef database update

echo "Starting your project..."
dotnet build

if [$? -eq 0 ]; then
	dotnet run

else
	echo "The compilation failed, please create an issue in the github repo if it happens"
fi
