from zipfile import ZipFile

fileName = "AU.zip"

try :
    
    with ZipFile(fileName, 'r') as zip :
        zip.extractall("AU\\")

    for root, directories, files in os.walk("AU\\") :
        # print(root, " ", files)
        for filename in files :
            for line in open("AU\\" + filename) :
                print(line)

except :
    
    print( "Error reading the file" )