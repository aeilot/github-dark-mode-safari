//
//  SafariExtensionViewController.swift
//  GitHubDarkMode Extension
//
//  Created by Louis Aeilot on 2020/8/25.
//  Copyright © 2020 Louis Studio. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
