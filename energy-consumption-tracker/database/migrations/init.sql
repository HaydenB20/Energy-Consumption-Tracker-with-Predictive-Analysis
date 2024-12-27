CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE energy_consumption (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    consumption_date DATE NOT NULL,
    consumption_value FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE predictive_analysis (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    analysis_date DATE NOT NULL,
    predicted_value FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);