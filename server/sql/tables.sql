CREATE TABLE IF NOT EXISTS brukere (
	id SERIAL PRIMARY KEY,
	navn TEXT NOT NULL,
	epost TEXT UNIQUE NOT NULL,
	tlf TEXT,
	passord_hash TEXT NOT NULL,
	rolle TEXT NOT NULL DEFAULT 'bruker'
	CONSTRAINT gyldig_rolle CHECK(
		rolle IN ('admin','bruker'))
);
CREATE TABLE IF NOT EXISTS tickets (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	bruker_id INT NOT NULL UNIQUE,
	CONSTRAINT bruker_tickets
		FOREIGN KEY (bruker_id)
		REFERENCES brukere(id)
		ON DELETE CASCADE
)
