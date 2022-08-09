create TABLE dps_placemark(
   id serial PRIMARY KEY,
   latitude  FLOAT,
   longitude  FLOAT,
   is_verificated BOOLEAN,
   license_plate VARCHAR(255),
   descript VARCHAR(255)
);