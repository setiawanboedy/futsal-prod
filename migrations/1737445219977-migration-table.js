"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationTable1737445219977 = void 0;
class MigrationTable1737445219977 {
    constructor() {
        this.name = 'MigrationTable1737445219977';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`hp\` \`hp\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`lat\` \`lat\` decimal(10,8) NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`lng\` \`lng\` decimal(10,8) NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`photo\` \`photo\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_b1bda35cdb9a2c1b777f5541d87\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`confirmationToken\` \`confirmationToken\` varchar(64) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`confirmationTokenExpires\` \`confirmationTokenExpires\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`profileId\` \`profileId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`createdAt\` \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_b1bda35cdb9a2c1b777f5541d87\` FOREIGN KEY (\`profileId\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_b1bda35cdb9a2c1b777f5541d87\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookings\` CHANGE \`createdAt\` \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`profileId\` \`profileId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`confirmationTokenExpires\` \`confirmationTokenExpires\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`confirmationToken\` \`confirmationToken\` varchar(64) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_b1bda35cdb9a2c1b777f5541d87\` FOREIGN KEY (\`profileId\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`photo\` \`photo\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`lng\` \`lng\` decimal(10,8) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`lat\` \`lat\` decimal(10,8) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`hp\` \`hp\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
    }
}
exports.MigrationTable1737445219977 = MigrationTable1737445219977;
