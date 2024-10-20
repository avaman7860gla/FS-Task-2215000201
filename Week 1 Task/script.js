function showTeacher(subject) {
    const teacher = {
        'MACHINE LEARNING': '<b>Jagjeet Kumar</b> - jagjeetkumar@gla.ac.in<br><br>Room: AB1 201, Contact: 6927840263',
        'THEORY OF AUTOMATA': '<b>Shubham Shukla</b> - shubham.shukla@gla.ac.in<br><br>Room: AB9 106, Contact: 7290451930',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Madhu Sudan Kumar</b> - madhusudan.kumar@gla.ac.in<br><br>Room: AB3 301, Contact: 9834286937',
        'QUANT AND APTITUDE': '<b>Ayush Gupta</b> - ayush.gupta@gla.ac.in<br><br>Room: AB3 202, Contact: 8764539827',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b> - anjali.mehra@gla.ac.in<br><br>Room: AB1 403, Contact: 8382376484',
        'MACHINE LEARNING LAB': '<b>Jagjeet Kumar</b> - jagjeetkumar@gla.ac.in@gla.ac.in<br><br>Room: AB1 202, Contact: 6483598782',
        'DATA STRUCTURES AND ALGORITHM': '<b>Sohil Khan</b> - sohil.khan@gla.ac.in<br><br>Room: AB1 413, Contact: 8234682837',
        'FULL_STACK': '<b>Shiv Kumar Verma</b> - shivkumar.verma@gla.ac.in<br><br>Room: AB9 109, Contact: 9854637736'
    };

    
    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
