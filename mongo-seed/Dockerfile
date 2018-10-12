FROM mongo

COPY airejeux.json /airejeux.json
COPY banc.json /banc.json
COPY bar.json /bar.json
COPY bus.json /bus.json
COPY parkingvelo.json /parkingvelo.json

CMD mongoimport --host mongodb --db datapau --collection airejeux --type json --file /airejeux.json --jsonArray && mongoimport --host mongodb --db datapau --collection banc --type json --file /banc.json --jsonArray && mongoimport --host mongodb --db datapau --collection bar --type json --file /bar.json --jsonArray && mongoimport --host mongodb --db datapau --collection bus --type json --file /bus.json --jsonArray && mongoimport --host mongodb --db datapau --collection parkingvelo --type json --file /parkingvelo.json --jsonArray
