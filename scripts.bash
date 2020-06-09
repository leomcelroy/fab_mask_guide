if [ $1 == "run" ]; then
  deno run --allow-net --allow-read --importmap=import_map.json --unstable server.js
else
  echo "Command not recognized."
fi