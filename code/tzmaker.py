inpt = open("tz_map.csv", "r")
output = open("tzdata.js", "w")

for line in inpt: 
    output.write(line.replace("\n", "") + ",\n")  

inpt.close()
output.close()
