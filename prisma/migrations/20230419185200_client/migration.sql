/*
  Warnings:

  - You are about to drop the `retaurantes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `retaurantes`;

-- CreateTable
CREATE TABLE `retaurants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `email` VARCHAR(255) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `phone` VARCHAR(255) NOT NULL DEFAULT '',
    `cnpj` VARCHAR(255) NOT NULL DEFAULT '',
    `loc` VARCHAR(255) NOT NULL DEFAULT '',

    UNIQUE INDEX `retaurants_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
