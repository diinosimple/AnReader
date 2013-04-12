//
//  AppDelegate.h
//  AnReader
//
//  Created by xdjiang on 4/8/13.
//  Copyright (c) 2013 xdjiang. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AnFengDe_EPUB_UI/EPubUIHeader.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;
@property (strong, nonatomic) EPubRootViewController *rootEpubView;
@end
