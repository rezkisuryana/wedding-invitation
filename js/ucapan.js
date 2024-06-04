function submitEntry() {
    const name = document.getElementById('guest-name').value;
    const message = document.getElementById('guest-message').value;

    if (name && message) {
        const entry = document.createElement('div');
        entry.className = 'list-group-item';
        entry.innerHTML = `<span>${name}</span>${message}`;

        document.getElementById('guestbook-entries').appendChild(entry);

        document.getElementById('guest-name').value = '';
        document.getElementById('guest-message').value = '';
    } else {
        alert('Nama dan Ucapan harus diisi.');
    }
}
