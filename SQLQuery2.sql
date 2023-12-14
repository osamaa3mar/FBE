-- Adding records to the Users table
INSERT INTO Users (UserID, UserName, Email, Password)
VALUES
   (1, 'JohnDoe', 'john.doe@example.com', 'password123'),
   (2, 'JaneSmith', 'jane.smith@example.com', 'securepass'),
   (3, 'AliceJones', 'alice.jones@example.com', 'secretword');
   


-- Adding records to the Messages table
INSERT INTO Messages (MessageID, SenderID, ReceiverID, MessageText,Timestamp)
VALUES
   (1, 1, 2, 'Hello Jane!', DEFAULT),
   (2, 2, 1, 'Hi John!', DEFAULT),
   (3, 3, 1, 'Hey John, how are you?', DEFAULT);
   -- Assuming PaymentDate is a TIMESTAMP column without a default value

-- Adding records to the Services table
INSERT INTO Services (ServiceID, ServiceName, Description, Price)
VALUES
   (1, 'Premium Messaging', 'Unlimited messages and additional features', 9.99),
   (2, 'File Sharing', 'Send and receive files', 4.99),
   (3, 'Custom Emojis', 'Create and use custom emojis in messages', 2.99);



-- Adding records to the Payments table
INSERT INTO Payments (PaymentID, UserID, ServiceID, Amount, PaymentDate)
VALUES
   (1, 1, 1, 9.99, '2023-01-01'),
   (2, 2, 2, 4.99, '2023-01-02'),
   (3, 3, 3, 2.99, '2023-01-03');
UPDATE Users SET Password = 'newpassword' WHERE UserID = 1;


-- Update a record in the Messages table
UPDATE Messages SET MessageText = 'Updated message!' WHERE MessageID = 1;

-- Update a record in the Services table
UPDATE Services SET Price = 12.99 WHERE ServiceID = 1;


-- Update a record in the Payments table
UPDATE Payments SET Amount = 14.99 WHERE PaymentID = 1;


DELETE FROM Users WHERE UserID = 3;

DELETE FROM Messages WHERE MessageID = 2;

DELETE FROM Services WHERE ServiceID = 3;

DELETE FROM Payments WHERE PaymentID = 2;


EXEC sp_RENAME 'Users.User_name', 'UserName', 'COLUMN'
