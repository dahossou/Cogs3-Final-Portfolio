function showSection(sectionID){
    document.querySelectorAll('.section').forEach(section =>{
        section.classList.add('none');
    });
    document.getElementById(sectionID).classList.remove('none');
}
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
})



