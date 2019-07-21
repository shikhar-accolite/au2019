# Given words
words = ["Accolite", "Noon", "Bumper", "Corporate", "Malayalam", "Madam", "Civic"]

# Finding palindromic words ignoring case-sensitivity
palindrome_words = list( filter( ( lambda x : x.upper() == x[::-1].upper() ), words ) )

print( list(palindrome_words) )

# Map palindrome words with corresponding numbers
alphabet_to_number_mapping = set( zip( palindrome_words, [ sum( map((lambda x : ord(x.lower()) - 96), palin) ) for palin in palindrome_words ] ) )

print(alphabet_to_number_mapping)

# Function to check Odd/Even
def is_odd_even(num) : 
    return True if (num % 2 == 0) else False

# Function to check armstrong or not
def is_armstrong(num) :
    
    temp_num = num
    sum = 0
    while ( temp_num > 0 ) :
        sum += ((temp_num % 10) ** 3);
        temp_num //= 10;
        
    return (sum == num)
    
# Check palindromic words for evn/odd or armstrong
for word, number in alphabet_to_number_mapping :
    
    if is_odd_even(number) and is_armstrong(number) :
        print ( "{} is both even and armstrong".format( tuple({word: number}) ) )
    elif is_odd_even(number) :
        print ( "{} is even but not armstrong".format( tuple({word: number}) ) )
    elif is_armstrong(number) :
        print ( "{} is odd and armstrong".format( tuple({word: number}) ) )
    else :
        print ( "{} is odd but not armstrong".format( tuple({word: number}) ) )