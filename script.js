// --- Static data from your CSV ---------------------------------------------
// Generated from "jat raffle csv.csv"
const PARTICIPANTS = [
  { id: 0, firstName: "Maddox", lastName: "Mai", teacher: "Lopez, G", grade: "K", tickets: 88 },
  { id: 1, firstName: "Avery", lastName: "Keil", teacher: "Osborne", grade: "5th", tickets: 73 },
  { id: 2, firstName: "Kayla", lastName: "Park", teacher: "Spirk", grade: "1st-2nd", tickets: 66 },
  { id: 3, firstName: "Avalon", lastName: "Black", teacher: "Githens", grade: "K", tickets: 43 },
  { id: 4, firstName: "Mason", lastName: "Malawy", teacher: "Moore", grade: "5th", tickets: 39 },
  { id: 5, firstName: "Harrison", lastName: "Tang", teacher: "Lopez, G", grade: "K", tickets: 31 },
  { id: 6, firstName: "Avery", lastName: "Whitlock", teacher: "Osborne", grade: "5th", tickets: 28 },
  { id: 7, firstName: "McKenna", lastName: "Young", teacher: "Spirk", grade: "1st-2nd", tickets: 28 },
  { id: 8, firstName: "Asher", lastName: "Carballo", teacher: "Koelzer", grade: "K", tickets: 27 },
  { id: 9, firstName: "Hilary", lastName: "Hurd", teacher: "Lopez, G", grade: "K", tickets: 26 },
  { id: 10, firstName: "Chandler", lastName: "Bourque", teacher: "Choy", grade: "4th", tickets: 25 },
  { id: 11, firstName: "Grayson", lastName: "Brent", teacher: "Osborne", grade: "5th", tickets: 25 },
  { id: 12, firstName: "Maggie", lastName: "Nelson", teacher: "Mercado", grade: "2nd-3rd", tickets: 25 },
  { id: 13, firstName: "Julee", lastName: "Shim", teacher: "Spirk", grade: "1st-2nd", tickets: 25 },
  { id: 14, firstName: "Kamaile", lastName: "Lahaole-Silva", teacher: "Toste", grade: "3rd", tickets: 25 },
  { id: 15, firstName: "Lincoln", lastName: "Nelson", teacher: "Lopez, G", grade: "K", tickets: 24 },
  { id: 16, firstName: "Justin", lastName: "Chung", teacher: "Lopez, G", grade: "K", tickets: 22 },
  { id: 17, firstName: "Miles", lastName: "Hagen", teacher: "Tucker", grade: "2nd", tickets: 22 },
  { id: 18, firstName: "Sophie", lastName: "Rooney", teacher: "Pak", grade: "1st", tickets: 21 },
  { id: 19, firstName: "Anson", lastName: "Fromm", teacher: "L. Lockwood", grade: "TK", tickets: 20 },
  { id: 20, firstName: "Madeline", lastName: "Martin", teacher: "Choy", grade: "4th", tickets: 20 },
  { id: 21, firstName: "Tessa", lastName: "Bator", teacher: "Lopez, G", grade: "K", tickets: 20 },
  { id: 22, firstName: "Henrik", lastName: "Teufel", teacher: "Lopez, G", grade: "K", tickets: 20 },
  { id: 23, firstName: "Maddie", lastName: "Kachel", teacher: "L. Lockwood", grade: "TK", tickets: 19 },
  { id: 24, firstName: "Reagan", lastName: "Miles", teacher: "Mercado", grade: "2nd-3rd", tickets: 19 },
  { id: 25, firstName: "Henry", lastName: "Wessels", teacher: "Mercado", grade: "2nd-3rd", tickets: 19 },
  { id: 26, firstName: "Chase", lastName: "Brown", teacher: "Linder", grade: "4th", tickets: 18 },
  { id: 27, firstName: "Jack", lastName: "Griffin", teacher: "Mercado", grade: "2nd-3rd", tickets: 18 },
  { id: 28, firstName: "Kingston", lastName: "Kopparapu", teacher: "Pak", grade: "1st", tickets: 18 },
  { id: 29, firstName: "Kaiana", lastName: "Kielczewski", teacher: "Pak", grade: "1st", tickets: 18 },
  { id: 30, firstName: "Ali", lastName: "Miesser", teacher: "Tucker", grade: "2nd", tickets: 18 },
  { id: 31, firstName: "Lucca", lastName: "Nakamura", teacher: "Githens", grade: "K", tickets: 17 },
  { id: 32, firstName: "Quinn", lastName: "Aliotta", teacher: "Lopez, G", grade: "K", tickets: 17 },
  { id: 33, firstName: "Clark", lastName: "Chiu", teacher: "Lopez, G", grade: "K", tickets: 17 },
  { id: 34, firstName: "James", lastName: "Gitrangdja", teacher: "Lopez, G", grade: "K", tickets: 17 },
  { id: 35, firstName: "Maya", lastName: "Kroeber", teacher: "Spirk", grade: "1st-2nd", tickets: 17 },
  { id: 36, firstName: "Shea", lastName: "Morrison", teacher: "Toste", grade: "3rd", tickets: 17 },
  { id: 37, firstName: "Savannah", lastName: "Skaar", teacher: "Pak", grade: "1st", tickets: 16 },
  { id: 38, firstName: "Melia", lastName: "Susi", teacher: "Pak", grade: "1st", tickets: 16 },
  { id: 39, firstName: "Ravi", lastName: "Subramaniam", teacher: "Spirk", grade: "1st-2nd", tickets: 16 },
  { id: 40, firstName: "Colleen", lastName: "Nikolai", teacher: "Toste", grade: "3rd", tickets: 16 },
  { id: 41, firstName: "Kingston", lastName: "Rodriguez", teacher: "T. Lockwood", grade: "TK", tickets: 15 },
  { id: 42, firstName: "Ishita", lastName: "Padhy", teacher: "Lopez, G", grade: "K", tickets: 15 },
  { id: 43, firstName: "Justin", lastName: "Zhang", teacher: "Lopez, G", grade: "K", tickets: 15 },
  { id: 44, firstName: "Hank", lastName: "Heeschen", teacher: "Mercado", grade: "2nd-3rd", tickets: 15 },
  { id: 45, firstName: "Luke", lastName: "Lauritzen", teacher: "Mercado", grade: "2nd-3rd", tickets: 15 },
  { id: 46, firstName: "Lucy", lastName: "Scopazzi", teacher: "Mercado", grade: "2nd-3rd", tickets: 15 },
  { id: 47, firstName: "Everett", lastName: "Santoyo", teacher: "Pak", grade: "1st", tickets: 15 },
  { id: 48, firstName: "Penelope", lastName: "Sy", teacher: "Pak", grade: "1st", tickets: 15 },
  { id: 49, firstName: "Eian", lastName: "Teufel", teacher: "T. Lockwood", grade: "TK", tickets: 14 },
  { id: 50, firstName: "Wren", lastName: "Borgerson", teacher: "L. Lockwood", grade: "TK", tickets: 14 },
  { id: 51, firstName: "Bennett", lastName: "Kirkman", teacher: "Mercado", grade: "2nd-3rd", tickets: 14 },
  { id: 52, firstName: "Luke", lastName: "Borer", teacher: "Osborne", grade: "5th", tickets: 14 },
  { id: 53, firstName: "Leila", lastName: "Moore", teacher: "Osborne", grade: "5th", tickets: 14 },
  { id: 54, firstName: "Harper", lastName: "Templeton", teacher: "Spirk", grade: "1st-2nd", tickets: 14 },
  { id: 55, firstName: "James", lastName: "Clifford", teacher: "Githens", grade: "K", tickets: 13 },
  { id: 56, firstName: "Lilah", lastName: "Pennypacker", teacher: "Lopez, G", grade: "K", tickets: 13 },
  { id: 57, firstName: "Ethan", lastName: "Li", teacher: "Mercado", grade: "2nd-3rd", tickets: 13 },
  { id: 58, firstName: "Liam", lastName: "Leclercq", teacher: "Spirk", grade: "1st-2nd", tickets: 13 },
  { id: 59, firstName: "Bhavya", lastName: "Dasari", teacher: "T. Lockwood", grade: "TK", tickets: 12 },
  { id: 60, firstName: "Esther", lastName: "Goldman", teacher: "Koelzer", grade: "K", tickets: 12 },
  { id: 61, firstName: "Mia", lastName: "Chen", teacher: "Lopez, G", grade: "K", tickets: 12 },
  { id: 62, firstName: "Charles", lastName: "Dickinson", teacher: "Lopez, G", grade: "K", tickets: 12 },
  { id: 63, firstName: "Vonn", lastName: "Hansen", teacher: "Mercado", grade: "2nd-3rd", tickets: 12 },
  { id: 64, firstName: "Addy", lastName: "Peasley", teacher: "Pak", grade: "1st", tickets: 12 },
  { id: 65, firstName: "AJ", lastName: "Novak", teacher: "Toste", grade: "3rd", tickets: 12 },
  { id: 66, firstName: "Charlie", lastName: "Brock", teacher: "Mercado", grade: "2nd-3rd", tickets: 11 },
  { id: 67, firstName: "Addyson", lastName: "Buczynski", teacher: "Mercado", grade: "2nd-3rd", tickets: 11 },
  { id: 68, firstName: "Khloe", lastName: "Chan", teacher: "Spirk", grade: "1st-2nd", tickets: 11 },
  { id: 69, firstName: "Eloise", lastName: "Holloran", teacher: "Spirk", grade: "1st-2nd", tickets: 11 },
  { id: 70, firstName: "Sarah", lastName: "Hui", teacher: "Spirk", grade: "1st-2nd", tickets: 11 },
  { id: 71, firstName: "Jace", lastName: "James", teacher: "T. Lockwood", grade: "TK", tickets: 11 },
  { id: 72, firstName: "Meadow", lastName: "Moriarty", teacher: "L. Lockwood", grade: "TK", tickets: 11 },
  { id: 73, firstName: "Sydney", lastName: "Rozman", teacher: "Osborne", grade: "5th", tickets: 11 },
  { id: 74, firstName: "Millie", lastName: "Umezawa", teacher: "Mercado", grade: "2nd-3rd", tickets: 11 },
  { id: 75, firstName: "Archer", lastName: "Ward", teacher: "Mercado", grade: "2nd-3rd", tickets: 11 },
  { id: 76, firstName: "Sarah", lastName: "Everist", teacher: "T. Lockwood", grade: "TK", tickets: 10 },
  { id: 77, firstName: "Andrew", lastName: "Schutze", teacher: "L. Lockwood", grade: "TK", tickets: 10 },
  { id: 78, firstName: "Payton", lastName: "James", teacher: "L. Lockwood", grade: "TK", tickets: 10 },
  { id: 79, firstName: "Elle", lastName: "Lemaire", teacher: "L. Lockwood", grade: "TK", tickets: 10 },
  { id: 80, firstName: "Aaron", lastName: "Nakamura", teacher: "Linder", grade: "4th", tickets: 10 },
  { id: 81, firstName: "Wesley", lastName: "Gadiyar", teacher: "Mercado", grade: "2nd-3rd", tickets: 10 },
  { id: 82, firstName: "Jack", lastName: "Hammermaster", teacher: "Mercado", grade: "2nd-3rd", tickets: 10 },
  { id: 83, firstName: "Dexter", lastName: "Ho", teacher: "Mercado", grade: "2nd-3rd", tickets: 10 },
  { id: 84, firstName: "Milan", lastName: "Leclercq", teacher: "Toste", grade: "3rd", tickets: 10 },
  { id: 85, firstName: "Rebecca", lastName: "Berberian", teacher: "Choy", grade: "4th", tickets: 9 },
  { id: 86, firstName: "Blaise", lastName: "Miano", teacher: "Choy", grade: "4th", tickets: 9 },
  { id: 87, firstName: "Clara", lastName: "Meyers", teacher: "Koelzer", grade: "K", tickets: 9 },
  { id: 88, firstName: "Rohan", lastName: "Padhy", teacher: "Koelzer", grade: "K", tickets: 9 },
  { id: 89, firstName: "Mateo", lastName: "Prado", teacher: "Koelzer", grade: "K", tickets: 9 },
  { id: 90, firstName: "Lucas", lastName: "Ryu", teacher: "Koelzer", grade: "K", tickets: 9 },
  { id: 91, firstName: "Richard", lastName: "Thompson", teacher: "Koelzer", grade: "K", tickets: 9 },
  { id: 92, firstName: "Emily", lastName: "Li", teacher: "Mercado", grade: "2nd-3rd", tickets: 9 },
  { id: 93, firstName: "Zoey", lastName: "Acker", teacher: "Osborne", grade: "5th", tickets: 9 },
  { id: 94, firstName: "Savanna", lastName: "Engelhardt", teacher: "Osborne", grade: "5th", tickets: 9 },
  { id: 95, firstName: "Rory", lastName: "Stanish", teacher: "Osborne", grade: "5th", tickets: 9 },
  { id: 96, firstName: "Riley June", lastName: "Gregory", teacher: "Pak", grade: "1st", tickets: 9 },
  { id: 97, firstName: "Eden", lastName: "Kerner", teacher: "Pak", grade: "1st", tickets: 9 },
  { id: 98, firstName: "Joe", lastName: "Cacic", teacher: "Spirk", grade: "1st-2nd", tickets: 9 },
  { id: 99, firstName: "Joshua", lastName: "Godden", teacher: "Spirk", grade: "1st-2nd", tickets: 9 },
  { id: 100, firstName: "Mara", lastName: "Schneider", teacher: "Spirk", grade: "1st-2nd", tickets: 9 },
  { id: 101, firstName: "Caleb", lastName: "Chen", teacher: "Tucker", grade: "2nd", tickets: 9 },
  { id: 102, firstName: "Kendall", lastName: "Jensen", teacher: "Tucker", grade: "2nd", tickets: 9 },
  { id: 103, firstName: "Branson", lastName: "Lopez", teacher: "Tucker", grade: "2nd", tickets: 9 },
  { id: 104, firstName: "Sam", lastName: "Chan", teacher: "Choy", grade: "4th", tickets: 8 },
  { id: 105, firstName: "Ellie", lastName: "Lee", teacher: "Choy", grade: "4th", tickets: 8 },
  { id: 106, firstName: "Amelia", lastName: "Martin", teacher: "Choy", grade: "4th", tickets: 8 },
  { id: 107, firstName: "Vivian", lastName: "Thompson", teacher: "Choy", grade: "4th", tickets: 8 },
  { id: 108, firstName: "Harrison", lastName: "Stone", teacher: "Choy", grade: "4th", tickets: 8 },
  { id: 109, firstName: "Everett", lastName: "Holland", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 110, firstName: "Tallulah", lastName: "Kiesel", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 111, firstName: "Peyton", lastName: "Koelzer", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 112, firstName: "Eva", lastName: "Prince-Berkelhamer", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 113, firstName: "Hazel", lastName: "Shi", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 114, firstName: "Zane", lastName: "Weiss", teacher: "Koelzer", grade: "K", tickets: 8 },
  { id: 115, firstName: "Lauren", lastName: "Jaeger", teacher: "Linder", grade: "4th", tickets: 8 },
  { id: 116, firstName: "Sofia", lastName: "Alcantara", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 117, firstName: "Mackenzie", lastName: "Bible", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 118, firstName: "Isa", lastName: "Fernandez", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 119, firstName: "George", lastName: "Jambor", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 120, firstName: "Tripp", lastName: "Moore", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 121, firstName: "Lena", lastName: "Moriarty", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 122, firstName: "Julia", lastName: "Oman", teacher: "Mercado", grade: "2nd-3rd", tickets: 8 },
  { id: 123, firstName: "Jake", lastName: "Baraff", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 124, firstName: "Jade", lastName: "Endo", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 125, firstName: "Henry", lastName: "Heissenbuttel", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 126, firstName: "Hudson", lastName: "Leszyk", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 127, firstName: "Weslyn", lastName: "Lopez", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 128, firstName: "Grace", lastName: "Moran", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 129, firstName: "Nathan", lastName: "Schutze", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 130, firstName: "Sofie", lastName: "Sweeney", teacher: "Osborne", grade: "5th", tickets: 8 },
  { id: 131, firstName: "Isabel", lastName: "Baden", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 132, firstName: "Savannah", lastName: "Maestas", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 133, firstName: "Connor", lastName: "McCall", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 134, firstName: "Jade", lastName: "Morales", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 135, firstName: "Lucy", lastName: "Tishler-Weinstein", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 136, firstName: "Levi", lastName: "Valentine", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 137, firstName: "Ruby", lastName: "Walker", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 138, firstName: "John", lastName: "Wessels", teacher: "Pak", grade: "1st", tickets: 8 },
  { id: 139, firstName: "Rachel", lastName: "Baez", teacher: "Spirk", grade: "1st-2nd", tickets: 8 },
  { id: 140, firstName: "Tosca", lastName: "Henderson", teacher: "Spirk", grade: "1st-2nd", tickets: 8 },
  { id: 141, firstName: "Buster", lastName: "Racket", teacher: "Spirk", grade: "1st-2nd", tickets: 8 },
  { id: 142, firstName: "Millie", lastName: "Schultz", teacher: "Spirk", grade: "1st-2nd", tickets: 8 },
  { id: 143, firstName: "Cole", lastName: "Acker", teacher: "Toste", grade: "3rd", tickets: 8 },
  { id: 144, firstName: "Levi", lastName: "Gaddy", teacher: "Toste", grade: "3rd", tickets: 8 },
  { id: 145, firstName: "Addison", lastName: "Jacobo", teacher: "Toste", grade: "3rd", tickets: 8 },
  { id: 146, firstName: "Naomi", lastName: "Lamb", teacher: "Toste", grade: "3rd", tickets: 8 },
  { id: 147, firstName: "Creedon", lastName: "Peasley", teacher: "Toste", grade: "3rd", tickets: 8 },
  { id: 148, firstName: "Logan", lastName: "Peabody Hernandez", teacher: "Choy", grade: "4th", tickets: 7 },
  { id: 149, firstName: "Katalina", lastName: "Acosta", teacher: "Koelzer", grade: "K", tickets: 7 },
  { id: 150, firstName: "Zia", lastName: "Bean-Gonzalez", teacher: "Koelzer", grade: "K", tickets: 7 },
  { id: 151, firstName: "Adelaide", lastName: "Kirkman", teacher: "Koelzer", grade: "K", tickets: 7 },
  { id: 152, firstName: "Sara", lastName: "Nagra", teacher: "Koelzer", grade: "K", tickets: 7 },
  { id: 153, firstName: "Emily", lastName: "Tierney", teacher: "Koelzer", grade: "K", tickets: 7 },
  { id: 154, firstName: "Alice", lastName: "Chun", teacher: "Linder", grade: "4th", tickets: 7 },
  { id: 155, firstName: "Jesse", lastName: "Dickinson", teacher: "Linder", grade: "4th", tickets: 7 },
  { id: 156, firstName: "Liam", lastName: "Gregory", teacher: "Linder", grade: "4th", tickets: 7 },
  { id: 157, firstName: "Andrew", lastName: "Bong", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 158, firstName: "Justus", lastName: "Dickinson", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 159, firstName: "Alex", lastName: "Martin", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 160, firstName: "Kalea", lastName: "Mateo", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 161, firstName: "Coen", lastName: "Patterson", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 162, firstName: "Maci-Kaye", lastName: "Prado", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 163, firstName: "Rafael", lastName: "Scopazzi", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 164, firstName: "Charlie", lastName: "Soto", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 165, firstName: "Mae", lastName: "Thompson", teacher: "Mercado", grade: "2nd-3rd", tickets: 7 },
  { id: 166, firstName: "Clark", lastName: "Bennett", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 167, firstName: "Charlotte", lastName: "Chun", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 168, firstName: "Sasha", lastName: "Heeschen", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 169, firstName: "Scarlett", lastName: "Jones", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 170, firstName: "Anthony", lastName: "Saprico", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 171, firstName: "Kellan", lastName: "Yeakle", teacher: "Osborne", grade: "5th", tickets: 7 },
  { id: 172, firstName: "Leo", lastName: "Dindzans", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 173, firstName: "Justin", lastName: "Dodson", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 174, firstName: "Jones", lastName: "Doolittle", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 175, firstName: "Henry", lastName: "Goldman", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 176, firstName: "Hollie", lastName: "Hurd", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 177, firstName: "Emma", lastName: "Khone", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 178, firstName: "Wyatt", lastName: "Leclercq", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 179, firstName: "Cora", lastName: "Mulford", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 180, firstName: "Jesse", lastName: "Nguyen", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 181, firstName: "Bentley", lastName: "Shaposhnick", teacher: "Pak", grade: "1st", tickets: 7 },
  { id: 182, firstName: "Alex", lastName: "Bell", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 183, firstName: "Sergio", lastName: "Flores Vara", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 184, firstName: "Rosie", lastName: "Kahlon", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 185, firstName: "Fiona", lastName: "McElheny", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 186, firstName: "Jordan", lastName: "Souza", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 187, firstName: "Clara", lastName: "Wright", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 188, firstName: "Ayden", lastName: "Williamson", teacher: "Spirk", grade: "1st-2nd", tickets: 7 },
  { id: 189, firstName: "Raegan", lastName: "Brodie", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 190, firstName: "Emme", lastName: "Capurro", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 191, firstName: "Mason", lastName: "Huey", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 192, firstName: "Lila", lastName: "Iglesias", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 193, firstName: "Callen", lastName: "Jensen", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 194, firstName: "June", lastName: "Magdanz", teacher: "T. Lockwood", grade: "TK", tickets: 7 },
  { id: 195, firstName: "Giada", lastName: "Acosta", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 196, firstName: "Eva", lastName: "Amore", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 197, firstName: "Charlotte", lastName: "Baer", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 198, firstName: "Francis", lastName: "Borgerson", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 199, firstName: "Amayia", lastName: "Garcia", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 200, firstName: "Layne", lastName: "Hall", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 201, firstName: "Graham", lastName: "Mitchell", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 202, firstName: "Arlo", lastName: "Morales", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 203, firstName: "Rochelle", lastName: "Mutrey", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 204, firstName: "Winnie", lastName: "Riegelhuth", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 205, firstName: "Brody", lastName: "Valentine", teacher: "Tucker", grade: "2nd", tickets: 7 },
  { id: 206, firstName: "Mariana", lastName: "Mix", teacher: "Linder", grade: "4th", tickets: 6 },
  { id: 207, firstName: "Clara", lastName: "Orr", teacher: "Linder", grade: "4th", tickets: 6 },
  { id: 208, firstName: "Dominic", lastName: "Prado", teacher: "Linder", grade: "4th", tickets: 6 },
  { id: 209, firstName: "Kingston", lastName: "Ritchie-Mullins", teacher: "Linder", grade: "4th", tickets: 6 },
  { id: 210, firstName: "Declan", lastName: "Hutchins", teacher: "Spirk", grade: "1st-2nd", tickets: 6 },
  { id: 211, firstName: "Everett", lastName: "Kraft", teacher: "Spirk", grade: "1st-2nd", tickets: 6 },
  { id: 212, firstName: "Jack", lastName: "Orr", teacher: "Spirk", grade: "1st-2nd", tickets: 6 },
  { id: 213, firstName: "Skylar", lastName: "Williams", teacher: "Spirk", grade: "1st-2nd", tickets: 6 },
  { id: 214, firstName: "Elsie", lastName: "Chen", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 215, firstName: "Rielyn", lastName: "Etcheto", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 216, firstName: "Emma", lastName: "MacDonald", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 217, firstName: "Maxwell", lastName: "Novak", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 218, firstName: "Rahul", lastName: "Parmar", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 219, firstName: "Emerson", lastName: "Templeton", teacher: "Toste", grade: "3rd", tickets: 6 },
  { id: 220, firstName: "Liam", lastName: "Luijten", teacher: "Choy", grade: "4th", tickets: 5 },
  { id: 221, firstName: "Jace", lastName: "Plateros", teacher: "Choy", grade: "4th", tickets: 5 },
  { id: 222, firstName: "Henry", lastName: "Saferis", teacher: "Choy", grade: "4th", tickets: 5 },
  { id: 223, firstName: "Avery", lastName: "Spach", teacher: "Choy", grade: "4th", tickets: 5 },
  { id: 224, firstName: "Colt", lastName: "Templeton", teacher: "Choy", grade: "4th", tickets: 5 },
  { id: 225, firstName: "Marshall", lastName: "Harrell", teacher: "Linder", grade: "4th", tickets: 5 },
  { id: 226, firstName: "Julius", lastName: "Liu", teacher: "Linder", grade: "4th", tickets: 5 },
  { id: 227, firstName: "Braxton", lastName: "Morales", teacher: "Linder", grade: "4th", tickets: 5 },
  { id: 228, firstName: "Leo", lastName: "Retzlaff", teacher: "Linder", grade: "4th", tickets: 5 },
  { id: 229, firstName: "Gavin", lastName: "Sy", teacher: "Linder", grade: "4th", tickets: 5 },
  { id: 230, firstName: "Charles", lastName: "Fahey", teacher: "T. Lockwood", grade: "TK", tickets: 5 },
  { id: 231, firstName: "Hannah", lastName: "Hamilton", teacher: "T. Lockwood", grade: "TK", tickets: 5 },
  { id: 232, firstName: "Adelaide", lastName: "Joiner", teacher: "T. Lockwood", grade: "TK", tickets: 5 },
  { id: 233, firstName: "Nolan", lastName: "Lyons", teacher: "T. Lockwood", grade: "TK", tickets: 5 },
  { id: 234, firstName: "Liam", lastName: "Yang", teacher: "T. Lockwood", grade: "TK", tickets: 5 },
  { id: 235, firstName: "Amelia", lastName: "See", teacher: "Tucker", grade: "2nd", tickets: 5 },
  { id: 236, firstName: "Aadit", lastName: "Parmar", teacher: "Tucker", grade: "2nd", tickets: 4 },
  { id: 237, firstName: "Hadley", lastName: "Peabody Hernandez", teacher: "L. Lockwood", grade: "TK", tickets: 3 },
  { id: 238, firstName: "Vincent", lastName: "Baranik", teacher: "Linder", grade: "4th", tickets: 3 },
  { id: 239, firstName: "Mila", lastName: "Garcia", teacher: "Toste", grade: "3rd", tickets: 3 },
  { id: 240, firstName: "Owen", lastName: "Perkins", teacher: "Toste", grade: "3rd", tickets: 3 },
  { id: 241, firstName: "Louis", lastName: "Milward-Dark", teacher: "Spirk", grade: "1st-2nd", tickets: 2 },
  { id: 242, firstName: "Aurora", lastName: "Acosta", teacher: "Githens", grade: "K", tickets: 1 },
  { id: 243, firstName: "Enna", lastName: "Miano", teacher: "Githens", grade: "K", tickets: 1 },
  { id: 244, firstName: "Violet", lastName: "Rice", teacher: "Githens", grade: "K", tickets: 1 },
  { id: 245, firstName: "Kaitlyn", lastName: "Navarro", teacher: "Toste", grade: "3rd", tickets: 1 },
  { id: 246, firstName: "Rainer", lastName: "Tafoya", teacher: "Tucker", grade: "2nd", tickets: 1 },
];

// --- Data structures -------------------------------------------------------

let originalParticipants = PARTICIPANTS.map((p) => ({ ...p }));
let rafflePool = [];
let equalPool = [];
let raffleWinners = [];
let grandWinners = [];
let mode = "raffle"; // "raffle" or "grand"

// --- DOM references --------------------------------------------------------

const drawButton = document.getElementById("drawButton");
const resetGrandButton = document.getElementById("resetGrandButton");
const resetRaffleButton = document.getElementById("resetRaffleButton");
const bigModeButton = document.getElementById("bigModeButton");

const modeLabel = document.getElementById("modeLabel");
const loadingWrapper = document.getElementById("loadingWrapper");
const winnerDisplay = document.getElementById("winnerDisplay");

const statsParticipants = document.getElementById("statsParticipants");
const statsTickets = document.getElementById("statsTickets");
const statsRaffleWinners = document.getElementById("statsRaffleWinners");
const statsGrandWinners = document.getElementById("statsGrandWinners");

const raffleWinnersList = document.getElementById("raffleWinnersList");
const grandWinnersList = document.getElementById("grandWinnersList");

// --- Helpers ---------------------------------------------------------------

function updateStats() {
  const totalTickets = rafflePool.reduce((sum, p) => sum + (p.tickets || 0), 0);
  statsParticipants.textContent = originalParticipants.length;
  statsTickets.textContent = totalTickets;
  statsRaffleWinners.textContent = raffleWinners.length;
  statsGrandWinners.textContent = grandWinners.length;
}

function renderWinnerDisplay(participant, fromMode) {
  if (!participant) {
    winnerDisplay.classList.add("empty");
    winnerDisplay.classList.remove("winner-highlight");
    winnerDisplay.innerHTML = "<p>No winner picked yet.</p>";
    return;
  }

  winnerDisplay.classList.remove("empty");

  // Trigger a little pop animation each time a winner is shown
  winnerDisplay.classList.remove("winner-highlight");
  void winnerDisplay.offsetWidth; // reflow
  winnerDisplay.classList.add("winner-highlight");

  const fullName = `${participant.firstName} ${participant.lastName}`.trim();
  const teacherGrade = `${participant.teacher || "Unknown teacher"} • ${
    participant.grade || "Unknown grade"
  }`;

  winnerDisplay.innerHTML = `
    <div>
      <div class="winner-main">${fullName}</div>
      <div class="winner-meta">${teacherGrade}</div>
      <div class="winner-tags">
        <span class="tag">${fromMode === "raffle" ? "Raffle Winner" : "Grand Prize Winner"}</span>
        <span class="tag">${participant.teacher || "Teacher N/A"}</span>
        <span class="tag">${participant.grade || "Grade N/A"}</span>
        ${
          fromMode === "raffle"
            ? `<span class="tag tag--tickets">${participant.tickets} ticket${
                participant.tickets === 1 ? "" : "s"
              }</span>`
            : ""
        }
      </div>
    </div>
  `;
}

function appendWinnerToList(participant, listElement, fromMode) {
  const li = document.createElement("li");
  const fullName = `${participant.firstName} ${participant.lastName}`.trim();
  li.innerHTML = `
    <div class="name">${fullName}</div>
    <div class="meta">
      ${participant.teacher || "Teacher N/A"} • ${participant.grade || "Grade N/A"}
      ${
        fromMode === "raffle"
          ? ` • ${participant.tickets} ticket${participant.tickets === 1 ? "" : "s"}`
          : ""
      }
    </div>
  `;
  listElement.insertBefore(li, listElement.firstChild);
}

function resetPoolsToOriginal() {
  rafflePool = originalParticipants
    .filter((p) => Number(p.tickets) > 0)
    .map((p) => ({ ...p, tickets: Number(p.tickets) || 0 }));

  equalPool = originalParticipants.map((p) => ({ ...p }));
}

function toggleControlsLoaded(loaded) {
  drawButton.disabled = !loaded;
  resetGrandButton.disabled = !loaded;
  resetRaffleButton.disabled = !loaded;
}

// --- Drawing logic ---------------------------------------------------------

function drawWeightedWinner() {
  if (rafflePool.length === 0) {
    alert("No raffle participants available. Did everyone already win?");
    return null;
  }

  const totalTickets = rafflePool.reduce((sum, p) => sum + p.tickets, 0);
  if (totalTickets <= 0) {
    alert("No tickets remaining for raffle mode.");
    return null;
  }

  let r = Math.random() * totalTickets;
  let winner = null;

  for (const p of rafflePool) {
    r -= p.tickets;
    if (r <= 0) {
      winner = p;
      break;
    }
  }

  if (!winner) {
    winner = rafflePool[rafflePool.length - 1];
  }

  rafflePool = rafflePool.filter((p) => p.id !== winner.id);
  return winner;
}

function drawEqualWinner() {
  if (equalPool.length === 0) {
    alert("No participants left for grand prize mode.");
    return null;
  }

  const index = Math.floor(Math.random() * equalPool.length);
  const winner = equalPool[index];
  equalPool.splice(index, 1);
  return winner;
}

// --- UI interactions -------------------------------------------------------

drawButton.addEventListener("click", () => {
  // Show waiting animation
  loadingWrapper.classList.remove("hidden");
  drawButton.disabled = true;
  resetGrandButton.disabled = true;
  resetRaffleButton.disabled = true;

  const LOADING_MS = 4500;

  setTimeout(() => {
    let winner = null;
    if (mode === "raffle") {
      winner = drawWeightedWinner();
      if (winner) {
        raffleWinners.push(winner);
        appendWinnerToList(winner, raffleWinnersList, "raffle");
      }
    } else {
      winner = drawEqualWinner();
      if (winner) {
        grandWinners.push(winner);
        appendWinnerToList(winner, grandWinnersList, "grand");
      }
    }

    if (winner) {
      renderWinnerDisplay(winner, mode);
    }

    updateStats();

    loadingWrapper.classList.add("hidden");
    drawButton.disabled = false;
    resetGrandButton.disabled = false;
    resetRaffleButton.disabled = false;
  }, LOADING_MS);
});

resetGrandButton.addEventListener("click", () => {
  equalPool = originalParticipants.map((p) => ({ ...p }));
  mode = "grand";
  modeLabel.textContent = "Grand Prize (everyone equal chance)";
  renderWinnerDisplay(null, null);

  alert(
    "Grand prize mode ready.\n\nEvery student now has an equal chance of winning, regardless of ticket count."
  );
  updateStats();
});

resetRaffleButton.addEventListener("click", () => {
  resetPoolsToOriginal();
  raffleWinners = [];
  grandWinners = [];
  raffleWinnersList.innerHTML = "";
  grandWinnersList.innerHTML = "";
  mode = "raffle";
  modeLabel.textContent = "Raffle (weighted by tickets)";
  renderWinnerDisplay(null, null);

  alert("Raffle has been fully reset. All tickets restored.");
  updateStats();
});

bigModeButton.addEventListener("click", () => {
  const isBig = document.body.classList.toggle("big-mode");
  bigModeButton.textContent = isBig ? "↩️ Exit Big Mode" : "🖥️ Big Mode";
});

// --- Initial setup ---------------------------------------------------------

resetPoolsToOriginal();
renderWinnerDisplay(null, null);
updateStats();
toggleControlsLoaded(true);
modeLabel.textContent = "Raffle (weighted by tickets)";
