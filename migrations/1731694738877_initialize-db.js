/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.sql(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        emailId TEXT UNIQUE 
        );
        `);

        pgm.sql(`INSERT INTO users (name, password, emailId)
            VALUES('Adleena', 'yesig', 'abc@gmail.com');`);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.sql(`DROP TABLE users`);
};
