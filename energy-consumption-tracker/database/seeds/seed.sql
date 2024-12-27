INSERT INTO users (id, username, email, created_at) VALUES
(1, 'user1', 'user1@example.com', NOW()),
(2, 'user2', 'user2@example.com', NOW()),
(3, 'user3', 'user3@example.com', NOW());

INSERT INTO energy_consumption (id, user_id, consumption_value, recorded_at) VALUES
(1, 1, 150.5, NOW()),
(2, 1, 200.0, NOW()),
(3, 2, 175.3, NOW()),
(4, 3, 220.1, NOW()),
(5, 2, 190.0, NOW());

INSERT INTO predictive_data (id, user_id, predicted_consumption, prediction_date) VALUES
(1, 1, 160.0, NOW() + INTERVAL '1 day'),
(2, 2, 180.0, NOW() + INTERVAL '1 day'),
(3, 3, 230.0, NOW() + INTERVAL '1 day');