USE graphql;

CREATE TABLE `produits` ( 
  `id` varchar(20) NOT NULL, 
  `url` varchar(100) NOT NULL, 
  `description` varchar(100) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
