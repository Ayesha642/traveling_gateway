CREATE DATABASE TravelGateway;
USE TravelGateway;

-- 1. Users Table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    role ENUM('admin', 'customer', 'tour_guide', 'transport_provider', 'hotel_manager', 'restaurant_manager') NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Destinations Table
CREATE TABLE Destinations (
    destination_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    description TEXT,
    best_time_to_visit VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tour Packages Table
CREATE TABLE TourPackages (
    package_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    location VARCHAR(255),
    duration VARCHAR(50),
    destination_id INT,
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id) ON DELETE SET NULL
);

-- 4. Transport Services Table
CREATE TABLE TransportServices (
    transport_id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT,
    transport_type ENUM('bus', 'car', 'train', 'airplane') NOT NULL,
    vehicle_details VARCHAR(255),
    departure_location VARCHAR(255),
    arrival_location VARCHAR(255),
    departure_time DATETIME,
    arrival_time DATETIME,
    price DECIMAL(10,2) NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (provider_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 5. Hotels Table
CREATE TABLE Hotels (
    hotel_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    destination_id INT,
    manager_id INT,
    star_rating INT CHECK (star_rating BETWEEN 1 AND 5),
    amenities TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 6. Hotel Rooms Table
CREATE TABLE HotelRooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    room_type ENUM('single', 'double', 'suite', 'family') NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id) ON DELETE CASCADE
);

-- 7. Restaurants Table
CREATE TABLE Restaurants (
    restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    destination_id INT,
    manager_id INT,
    cuisine_type VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 8. Bookings Table (Tour, Transport, Hotel, Restaurant)
CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    package_id INT NULL,
    transport_id INT NULL,
    hotel_id INT NULL,
    room_id INT NULL,
    restaurant_id INT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'refunded') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES TourPackages(package_id) ON DELETE SET NULL,
    FOREIGN KEY (transport_id) REFERENCES TransportServices(transport_id) ON DELETE SET NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id) ON DELETE SET NULL,
    FOREIGN KEY (room_id) REFERENCES HotelRooms(room_id) ON DELETE SET NULL,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id) ON DELETE SET NULL
);

-- 9. Payments Table
CREATE TABLE Payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('credit_card', 'PayPal', 'bank_transfer') NOT NULL,
    transaction_id VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('success', 'failed', 'pending') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE
);

-- 10. Reviews Table
CREATE TABLE Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    package_id INT NULL,
    transport_id INT NULL,
    hotel_id INT NULL,
    restaurant_id INT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES TourPackages(package_id) ON DELETE SET NULL,
    FOREIGN KEY (transport_id) REFERENCES TransportServices(transport_id) ON DELETE SET NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id) ON DELETE SET NULL,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id) ON DELETE SET NULL
);

-- 11. Customer Support Table
CREATE TABLE CustomerSupport (
    support_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    query TEXT NOT NULL,
    response TEXT,
    status ENUM('open', 'closed') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


-- Insert Users
INSERT INTO Users (name, email, password, phone, role) VALUES
('Ayesha Tariq', 'ayesha@example.com', 'hashedpass123', '03001234567', 'customer'),
('Mariam Tariq', 'mariam@example.com', 'hashedpass456', '03007654321', 'admin'),
('Ali Raza', 'ali@example.com', 'hashedpass789', '03121234567', 'hotel_manager');

-- Insert Destinations
INSERT INTO Destinations (name, country, city, description, best_time_to_visit) VALUES
('Hunza Valley', 'Pakistan', 'Gilgit', 'Beautiful mountain valley with lakes and glaciers', 'March - October'),
('Malam Jabba', 'Pakistan', 'Swat', 'Famous for skiing and snowboarding in winter', 'December - February'),
('Fairy Meadows', 'Pakistan', 'Diamer', 'A breathtaking camping site near Nanga Parbat', 'May - September');

-- Insert Tour Packages
INSERT INTO TourPackages (title, description, price, location, duration, destination_id, availability) VALUES
('Hunza Adventure Trip', '5-day guided tour with sightseeing and trekking', 50000, 'Gilgit', '5 Days', 1, TRUE),
('Swat Snow Adventure', '3-day skiing and snowboarding tour in Malam Jabba', 35000, 'Swat', '3 Days', 2, TRUE),
('Fairy Meadows Camping', '4-day camping and trekking experience', 40000, 'Diamer', '4 Days', 3, TRUE);

-- Insert Transport Services
INSERT INTO TransportServices (provider_id, transport_type, vehicle_details, departure_location, arrival_location, departure_time, arrival_time, price, availability) VALUES
(2, 'bus', 'Luxury Coach - 40 Seats', 'Islamabad', 'Gilgit', '2025-04-01 08:00:00', '2025-04-01 20:00:00', 5000, TRUE),
(2, 'car', 'Toyota Corolla - 4 Seats', 'Lahore', 'Malam Jabba', '2025-04-05 06:00:00', '2025-04-05 14:00:00', 8000, TRUE),
(2, 'airplane', 'PIA Flight PK-606', 'Karachi', 'Gilgit', '2025-04-10 09:00:00', '2025-04-10 12:00:00', 25000, TRUE);

-- Insert Hotels
INSERT INTO Hotels (name, location, destination_id, manager_id, star_rating, amenities) VALUES
('Serena Hotel Hunza', 'Gilgit', 1, 3, 5, 'WiFi, Free Breakfast, Valley View'),
('PC Malam Jabba', 'Swat', 2, 3, 5, 'Heated Rooms, Ski Equipment, Free Parking'),
('Fairy Meadows Lodge', 'Diamer', 3, 3, 4, 'Campfire, Hot Water, Guided Tours');

-- Insert Hotel Rooms
INSERT INTO HotelRooms (hotel_id, room_type, price, availability) VALUES
(1, 'single', 8000, TRUE),
(1, 'double', 12000, TRUE),
(2, 'suite', 20000, TRUE),
(3, 'family', 15000, TRUE);

-- Insert Restaurants
INSERT INTO Restaurants (name, location, destination_id, manager_id, cuisine_type) VALUES
('Mountain View Café', 'Gilgit', 1, 3, 'Pakistani, Chinese'),
('Swat Dine Inn', 'Swat', 2, 3, 'Pakistani, BBQ'),
('Fairy Meadows Restaurant', 'Diamer', 3, 3, 'Local, Continental');

-- Insert Bookings
INSERT INTO Bookings (user_id, package_id, transport_id, hotel_id, room_id, restaurant_id, booking_date, status, payment_status) VALUES
(1, 1, 1, 1, 2, 1, '2025-03-15', 'confirmed', 'paid'),
(2, 2, 2, 2, 3, 2, '2025-03-20', 'pending', 'pending'),
(3, 3, 3, 3, 4, 3, '2025-03-25', 'confirmed', 'paid');

-- Insert Payments
INSERT INTO Payments (booking_id, amount, payment_method, transaction_id, status) VALUES
(1, 50000, 'credit_card', 'TXN12345', 'success'),
(2, 35000, 'PayPal', 'TXN67890', 'pending'),
(3, 40000, 'bank_transfer', 'TXN11223', 'success');

-- Insert Reviews
INSERT INTO Reviews (user_id, package_id, transport_id, hotel_id, restaurant_id, rating, comment) VALUES
(1, 1, NULL, 1, NULL, 5, 'Amazing tour, great experience!'),
(2, 2, 2, NULL, 2, 4, 'Nice transport service, comfortable ride.'),
(3, NULL, NULL, 3, 3, 5, 'Best hotel stay in Fairy Meadows!');

-- Insert Customer Support Queries
INSERT INTO CustomerSupport (user_id, query, response, status) VALUES
(1, 'How do I change my tour dates?', 'Please contact customer support at support@example.com', 'closed'),
(2, 'Is there any discount available?', 'Yes, we have a 10% discount for early bookings!', 'open'),
(3, 'Need to cancel my booking.', NULL, 'open');