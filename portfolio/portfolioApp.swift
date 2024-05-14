//
//  portfolioApp.swift
//  portfolio
//
//  Created by TANAY on 15/05/24.
//

import SwiftUI

@main
struct portfolioApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: portfolioDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
