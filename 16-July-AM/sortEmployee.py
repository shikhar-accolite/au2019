# Open employee.csv in read mode
file = open("Employee.csv", 'r')

# Leave the header section
headers = file.readline().split(',')

# Read each record line by line
records = []
for line in file :
    records.append( tuple( line.split(',') ) )
    
# Sort according to id
records.sort()

# Printing the records
for id, name, dept, dob in records :
    print( "{} : {} : {} : {}".format(id, name, dept, dob) )