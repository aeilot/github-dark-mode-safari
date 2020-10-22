//
//  ViewController.swift
//  GitHubDarkMode
//
//  Created by Louis Aeilot on 2020/8/25.
//  Copyright © 2020 Louis Studio. All rights reserved.
//

import Cocoa
import SafariServices.SFSafariApplication
import os

final class ViewController: NSViewController {
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: "com.louisstudio.GitHubDarkMode-Extension") { error in
            if let error = error {
                // Insert code to inform the user that something went wrong.
                os_log("Failed to show safari preferences: %@", String(describing: error))
                DispatchQueue.main.async {
                    self.presentError(error)
                }
            }
        }
    }
}
