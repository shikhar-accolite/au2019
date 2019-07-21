roll_no = [ 1, 2, 8, 9, 5 ]
names = [ "A", "C", "WQ", "PO", "MNA" ]
marks = [ 90, 95, 96, 83, 98 ]


# Base class
class Student :
    
    roll_no = 0
    stu_name = ""
    
    def __init__(self, roll_no, name) :
        self.roll_no = roll_no
        self.stu_name = name;
    

# Inherited class
class StudentMarks(Student) :
    
    marks = 0
    
    def __init__(self, roll_no, name, marks) :
        Student.__init__(self, roll_no, name)
        self.marks = marks


# Implementing the above classes
students = []
for i in range(5) :
    students.append( StudentMarks(roll_no[i], names[i], marks[i]) )
    
for student in students :
    print( "{} : {} : {}".format(student.roll_no, student.stu_name, student.marks) )