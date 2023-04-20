-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `email` VARCHAR(255) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `phone` VARCHAR(255) NOT NULL DEFAULT '',

    UNIQUE INDEX `clients_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `retaurantes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `email` VARCHAR(255) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `phone` VARCHAR(255) NOT NULL DEFAULT '',
    `cnpj` VARCHAR(255) NOT NULL DEFAULT '',
    `loc` VARCHAR(255) NOT NULL DEFAULT '',

    UNIQUE INDEX `retaurantes_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
