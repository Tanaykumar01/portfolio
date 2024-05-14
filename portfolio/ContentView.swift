//
//  ContentView.swift
//  portfolio
//
//  Created by TANAY on 15/05/24.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: portfolioDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

#Preview {
    ContentView(document: .constant(portfolioDocument()))
}
