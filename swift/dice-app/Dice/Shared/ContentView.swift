//
//  ContentView.swift
//  Shared
//
//  Created by Alexander Mathis on 2/8/22.
//

import SwiftUI

struct ContentView: View {
    let diceNumber = Int.random(in: 1...6)
    
    var body: some View {
        VStack(alignment: .center, spacing: 5.0) {
            Image("dice-\(diceNumber)")
            Text("You rolled a \(diceNumber)")
                .bold()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
