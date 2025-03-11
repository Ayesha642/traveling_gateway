CREATE DATABASE TravelAgency;
USE TravelAgency;

-- Permission Table
CREATE TABLE permission (
    permission_id INT PRIMARY KEY AUTO_INCREMENT,
    permission_role_id INT NOT NULL,
    permission_title VARCHAR(255) NOT NULL,
    permission_description TEXT
);

INSERT INTO permission (permission_role_id, permission_title, permission_description) 
VALUES 
(1, 'Admin', 'Full access to system'),
(2, 'User', 'Can book hotels and packages'),
(3, 'Agent', 'Can manage bookings and travel packages');

-- Customer Table
CREATE TABLE customer (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    customer_email VARCHAR(255) UNIQUE NOT NULL,
    customer_username VARCHAR(255) UNIQUE NOT NULL,
    customer_password VARCHAR(255) NOT NULL,
    customer_address TEXT
);

INSERT INTO customer (customer_name, customer_phone, customer_email, customer_username, customer_password, customer_address) 
VALUES 
('John Doe', '1234567890', 'john@example.com', 'john_doe', 'pass123', '123 Street, City'),
('Jane Smith', '9876543210', 'jane@example.com', 'jane_smith', 'pass456', '456 Avenue, Town'),
('Alice Brown', '5556677889', 'alice@example.com', 'alice_brown', 'pass789', '789 Lane, Village');

-- Hotel Table
CREATE TABLE hotel (
    hotel_id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(255) NOT NULL,
    hotel_description TEXT,
    hotel_type VARCHAR(100),
    hotel_address TEXT NOT NULL,
    hotel_rent DECIMAL(10,2) NOT NULL
);

INSERT INTO hotel (hotel_name, hotel_description, hotel_type, hotel_address, hotel_rent) 
VALUES 
('Grand Hotel', 'Luxury hotel in the city center', 'Luxury', 'City Center, NY', 200.00),
('Cozy Inn', 'Affordable and comfortable', 'Budget', 'Downtown, LA', 80.00),
('Sea View Resort', 'Beachfront resort with sea view', 'Resort', 'Miami Beach, FL', 150.00);

-- Booking Table
CREATE TABLE booking (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_type VARCHAR(100) NOT NULL,
    booking_description TEXT,
    booking_title VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_hotel_id INT,
    FOREIGN KEY (booking_hotel_id) REFERENCES hotel(hotel_id) ON DELETE CASCADE
);

INSERT INTO booking (booking_type, booking_description, booking_title, booking_date, booking_hotel_id) 
VALUES 
('Hotel', 'Luxury suite for a weekend', 'Weekend Getaway', '2025-04-10', 1),
('Hotel', 'Budget stay for business trip', 'Business Stay', '2025-05-15', 2),
('Hotel', 'Family vacation package', 'Family Retreat', '2025-06-20', 3);

-- Transportation Table
CREATE TABLE transportation (
    transport_id INT PRIMARY KEY AUTO_INCREMENT,
    transport_name VARCHAR(255) NOT NULL,
    transport_description TEXT,
    transport_tour_id INT,
    transport_type VARCHAR(100) NOT NULL
);

INSERT INTO transportation (transport_name, transport_description, transport_tour_id, transport_type) 
VALUES 
('City Bus', 'Public transport for city tours', 1, 'Bus'),
('Luxury Car', 'Private luxury car rental', 2, 'Car'),
('Chartered Flight', 'Private jet for luxury travelers', 3, 'Flight');

-- Package Table
CREATE TABLE package (
    pckge_id INT PRIMARY KEY AUTO_INCREMENT,
    pckge_name VARCHAR(255) NOT NULL,
    pckge_type VARCHAR(100) NOT NULL,
    pckge_amount DECIMAL(10,2) NOT NULL,
    pckge_description TEXT
);

INSERT INTO package (pckge_name, pckge_type, pckge_amount, pckge_description) 
VALUES 
('Beach Special', 'Adventure', 500.00, 'Includes 3-night stay and candlelight dinner'),
('Adventure Package', 'Adventure', 700.00, 'Includes trekking, rafting, and camping'),
('Luxury Escape', 'Luxury', 1000.00, 'Includes 5-star hotel and spa treatments');

-- Travel Agent Table
CREATE TABLE travel_agent (
    travelagent_id INT PRIMARY KEY AUTO_INCREMENT,
    travelagent_name VARCHAR(255) NOT NULL,
    travelagent_phone VARCHAR(20) NOT NULL,
    travelagent_email VARCHAR(255) UNIQUE NOT NULL,
    travelagent_username VARCHAR(255) UNIQUE NOT NULL,
    travelagent_password VARCHAR(255) NOT NULL
);

INSERT INTO travel_agent (travelagent_name, travelagent_phone, travelagent_email, travelagent_username, travelagent_password) 
VALUES 
('Mark Wilson', '3334445555', 'mark@example.com', 'mark_wilson', 'agent123'),
('Sarah Lee', '6667778888', 'sarah@example.com', 'sarah_lee', 'agent456'),
('David Kim', '9990001111', 'david@example.com', 'david_kim', 'agent789');
