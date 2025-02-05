"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationTable1737444397719 = void 0;
class MigrationTable1737444397719 {
    constructor() {
        this.name = 'MigrationTable1737444397719';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` text NULL, \`hp\` varchar(255) NULL, \`lat\` decimal(10,8) NULL, \`lng\` decimal(10,8) NULL, \`photo\` text NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('ADMIN', 'TENANT', 'USER') NOT NULL DEFAULT 'USER', \`isConfirmed\` tinyint NOT NULL DEFAULT 0, \`confirmationToken\` varchar(64) NULL, \`confirmationTokenExpires\` timestamp NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`profileId\` int NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`REL_b1bda35cdb9a2c1b777f5541d8\` (\`profileId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bookings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`wa\` int NOT NULL, \`time\` int NOT NULL, \`date\` date NOT NULL, \`isBayar\` tinyint NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`deletedAt\` timestamp(6) NULL, UNIQUE INDEX \`IDX_617a813f85650dede37e929b99\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_b1bda35cdb9a2c1b777f5541d87\` FOREIGN KEY (\`profileId\`) REFERENCES \`profiles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_b1bda35cdb9a2c1b777f5541d87\``);
        await queryRunner.query(`DROP INDEX \`IDX_617a813f85650dede37e929b99\` ON \`bookings\``);
        await queryRunner.query(`DROP TABLE \`bookings\``);
        await queryRunner.query(`DROP INDEX \`REL_b1bda35cdb9a2c1b777f5541d8\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`profiles\``);
    }
}
exports.MigrationTable1737444397719 = MigrationTable1737444397719;
