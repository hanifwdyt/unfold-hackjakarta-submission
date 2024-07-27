table merchant
id
address
chain_name
lat
lng
halal (boolean)
rating
vote_count
business_type


table cuisine
merchant_id
name

table dishes
merchant_id
name
price

===

CREATE TABLE merchants (
    id VARCHAR(20) PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    chain_name VARCHAR(100),
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    halal BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3, 2) CHECK (rating >= 0 AND rating <= 5),
    vote_count INTEGER DEFAULT 0,
    business_type VARCHAR(100)
);

CREATE TABLE cuisines (
    id SERIAL PRIMARY KEY,
    merchant_id VARCHAR(20) REFERENCES merchant(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    merchant_id VARCHAR(20) REFERENCES merchant(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
);

CREATE TABLE open_hours (
    id SERIAL PRIMARY KEY,
    merchant_id VARCHAR(20) REFERENCES merchant(id) ON DELETE CASCADE,
    day VARCHAR(100) NOT NULL,
    hour VARCHAR(100) NOT NULL,
);
