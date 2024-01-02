fun main() {
    
    val border = "`-._,-'"
    val timesToRepeat = 4
    val name = "Alexander"
    
	printBorder(border, timesToRepeat)
    println("Happy Birthday, ${name}!")
	printBorder(border, timesToRepeat)
}

fun printBorder(border: String, timesToRepeat: Int) {
    repeat(timesToRepeat) {
        print(border)
    }
    println()
}