module.exports = {
    saveContactUsData: 'INSERT INTO contact_us_table (contact_us_id, name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)',
    getListOfContactUsData: 'select * from contact_us_table'
}