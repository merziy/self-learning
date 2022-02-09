#import <UIKit/UIKit.h>

@interface CoinTossViewController : UIViewController {
    UILabel *status;
    UILabel *result;
}

@property (nonatomic, retain) IBOutlet UILabel *status;
@property (nonatomic, retain) IBOutlet UILabel *result;

- (IBAction)callHeads;
- (IBAction)callTails;



@end
