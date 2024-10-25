const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');

const seedEmails = async () => {
  const emails =[
    {
      subject: "New User Dashboard Features",
      body: "We’re excited to introduce a host of new features for our user dashboard, designed to enhance your experience and make managing your account easier than ever before. Whether you’re checking analytics, managing preferences, or reviewing activity, the new dashboard offers a more streamlined and intuitive interface.\n\nOne of the major updates includes the customizable dashboard widgets. You can now choose which metrics you want to monitor closely and set them up in a way that works best for your workflow. Whether it's financial data, performance metrics, or user engagement stats, the widgets can be adjusted with a few simple clicks. The goal is to allow you to focus on what’s most important to you without unnecessary distractions.\n\nWe’ve also added a new notification center. All your system alerts, messages, and updates will now be stored in one place, making it easier for you to keep track of important communications. This will ensure that you never miss critical updates or notifications, whether they are related to system maintenance, policy changes, or upcoming events.\n\nAnother significant improvement is in our data visualization. We've enhanced the way data is presented by incorporating dynamic charts, graphs, and tables that respond to your inputs in real-time. This means you can now interact with your data directly from the dashboard, without having to export it or switch between tabs. These features will help you derive insights faster and make data-driven decisions with confidence.\n\nSecurity remains our top priority. In addition to multi-factor authentication, we've implemented a session management tool that allows you to monitor and control all active sessions on your account. If you notice any unfamiliar activity, you can immediately terminate any suspicious sessions to protect your information.\n\nAs always, our goal is to make our platform as user-friendly and efficient as possible. We’re constantly improving based on your feedback, and we encourage you to share your thoughts on these new features. We’ll continue to roll out updates that are aimed at making your user experience better.\n\nThank you for being a valued member of our platform!\n\nRegards,\nThe Dashboard Team",
      isRead: false,
      sender: "dashboard@team.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-22T12:25:00Z")
    },
    {
      subject: "Password Reset Notification",
      body: "We wanted to inform you that your password has been successfully reset. If you requested this change, there is no further action required. However, if you did not initiate this reset, please contact our support team immediately to secure your account.\n\nFor security purposes, we recommend regularly updating your password and avoiding using the same password across multiple sites. You can enable two-factor authentication in your account settings for an added layer of protection.\n\nIf you experience any issues accessing your account, please don’t hesitate to reach out to us. We are here to help and ensure the security of your data.\n\nRegards,\nThe Security Team",
      isRead: false,
      sender: "security@website.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-21T09:15:00Z")
    },
    {
      subject: "Welcome to Our Service",
      body: "Thank you for joining us! We’re excited to have you as part of our community. To get started, we’ve put together a few resources to help you make the most of your new account. Here’s what you can do:\n\n1. Explore your dashboard: Log in to see your account’s overview and features.\n2. Set your preferences: Customize your settings to suit your needs and improve your experience.\n3. Access support: Our team is always here to help. If you have any questions, feel free to reach out through our support center.\n\nWe’re constantly improving our platform, so stay tuned for updates and new features that will enhance your experience even further. We look forward to seeing what you accomplish with us!\n\nRegards,\nThe Support Team",
      isRead: true,
      sender: "welcome@service.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-20T08:30:00Z")
    },
    {
      subject: "Monthly Performance Report",
      body: "Your monthly performance report is now available for review. This detailed report provides a breakdown of your activity, including key performance indicators, engagement metrics, and other important data points. Please log in to your dashboard to access the full report.\n\nIn this report, you’ll find insights on your progress over the past month, along with recommendations for areas where you can improve. We’ve also added new tools to help you better visualize your data, such as interactive charts and graphs that you can customize according to your needs.\n\nWe encourage you to take a look at your report and use these insights to make informed decisions for the coming month. If you have any questions or need assistance interpreting your data, our support team is available to help.\n\nThank you for your continued trust in our platform. We are committed to helping you achieve your goals.\n\nBest regards,\nThe Reporting Team",
      isRead: true,
      sender: "reports@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-19T14:00:00Z")
    },
    {
      subject: "Scheduled System Maintenance",
      body: "We are writing to inform you of a scheduled system maintenance that will take place on October 26, 2024, between 2:00 AM and 6:00 AM UTC. During this time, our services will be temporarily unavailable as we perform necessary updates and improvements.\n\nWe apologize for any inconvenience this may cause and appreciate your understanding. Our team is committed to ensuring that our system continues to run smoothly and securely. After the maintenance, you may notice some performance improvements and enhanced security features.\n\nIf you have any questions about this maintenance or encounter any issues after the update, please reach out to our support team, and we’ll be happy to assist you.\n\nThank you for your patience and continued support.\n\nSincerely,\nThe Operations Team",
      isRead: false,
      sender: "ops@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-18T17:45:00Z")
    },
    {
      subject: "New Product Launch Announcement",
      body: "We are thrilled to announce the launch of our newest product: the XYZ Pro. This innovative solution has been designed to help you streamline your workflow and boost productivity.\n\nWith its advanced features and user-friendly interface, the XYZ Pro offers everything you need to stay organized and efficient. From automated task management to real-time collaboration tools, this product has it all.\n\nTo celebrate the launch, we are offering a limited-time discount for early adopters. Be sure to check out our website for more details and take advantage of this exclusive offer.\n\nWe can’t wait to hear your feedback and see how XYZ Pro helps you achieve more in less time.\n\nBest regards,\nThe Product Team",
      isRead: false,
      sender: "product@company.com",
      isBookmarked: true,
      createdAt: new Date("2024-10-17T10:20:00Z")
    },
    {
      subject: "Reminder: Complete Your Profile",
      body: "We noticed that your profile is not yet complete. To get the most out of our platform, we recommend filling in the remaining details.\n\nA complete profile helps us provide you with personalized recommendations and ensures that you have access to all available features. It only takes a few minutes, and the benefits are well worth it!\n\nTo complete your profile, simply log in to your account and update the necessary information. If you need any help along the way, our support team is here to assist you.\n\nThank you for choosing our service!\n\nRegards,\nThe Support Team",
      isRead: true,
      sender: "support@platform.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-16T13:55:00Z")
    },
    {
      subject: "Survey Invitation: Help Us Improve",
      body: "We value your feedback and would love to hear about your experience using our platform. Your input helps us understand what we’re doing well and where we can improve.\n\nPlease take a few minutes to complete our customer satisfaction survey. Your responses will directly influence future updates and enhancements to our services.\n\nAs a token of our appreciation, participants will be entered into a drawing for a chance to win a $50 gift card. Your feedback is important to us, and we thank you in advance for your time!\n\nBest regards,\nThe Survey Team",
      isRead: false,
      sender: "survey@platform.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-15T08:45:00Z")
    },
    {
      subject: "Account Activity Alert",
      body: "We’ve detected unusual activity on your account. As a precautionary measure, we recommend reviewing your recent activity and updating your password if necessary.\n\nTo view the details of the activity, please log in to your account and navigate to the ‘Security’ section. If you notice anything out of the ordinary, don’t hesitate to reach out to our support team for assistance.\n\nYour security is our top priority, and we’re here to ensure your account remains safe and secure.\n\nRegards,\nThe Security Team",
      isRead: true,
      sender: "security@website.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-14T16:20:00Z")
    },
    {
      subject: "New Features in Your Account",
      body: "We’re excited to announce the latest updates to your account, including several new features designed to improve your experience.\n\nYou can now personalize your dashboard with custom widgets, making it easier to monitor the metrics that matter most to you. Additionally, we’ve enhanced our data visualization tools to help you better analyze your performance.\n\nThese updates are part of our ongoing efforts to provide you with the best possible user experience. We hope you enjoy the new features, and we look forward to your feedback!\n\nBest regards,\nThe Product Team",
      isRead: true,
      sender: "product@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-13T11:05:00Z")
    },{
      subject: "Account Verification Needed",
      body: "We’ve noticed that your account hasn’t been fully verified yet. To ensure the security of your account and access to all features, please verify your email address by clicking the link below.\n\nVerifying your account will allow you to enjoy uninterrupted service and access to all the features our platform offers. It only takes a minute, and it’s a crucial step in protecting your account.\n\nIf you have any issues with verification, feel free to reach out to our support team, and we’ll guide you through the process.\n\nThank you for your cooperation!\n\nRegards,\nThe Account Team",
      isRead: false,
      sender: "account@platform.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-11T11:30:00Z")
    },
    {
      subject: "Introducing New Collaboration Tools",
      body: "We are excited to announce the launch of our new collaboration tools, designed to help teams work together more efficiently and stay organized.\n\nThese tools include shared task lists, project timelines, and real-time document editing. With these features, you can easily assign tasks, set deadlines, and collaborate with your team members in real time.\n\nTo get started with these new tools, simply log in to your account and explore the ‘Collaboration’ section. We’ve also included a quick-start guide to help you make the most of these new features.\n\nWe hope these tools enhance your teamwork and productivity!\n\nBest regards,\nThe Product Team",
      isRead: true,
      sender: "product@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-10T15:45:00Z")
    },
    {
      subject: "Exclusive Webinar Invitation: Maximizing Efficiency",
      body: "We are thrilled to invite you to our upcoming webinar, ‘Maximizing Efficiency with XYZ Tools.’ This exclusive session will provide insights on how to use our tools to streamline your workflow and boost productivity.\n\nIn this webinar, we’ll cover advanced tips and best practices for getting the most out of our platform, as well as how to integrate our tools into your daily operations seamlessly. You’ll also have the opportunity to ask questions and interact with our experts.\n\nThe webinar will take place on October 30, 2024, at 10:00 AM UTC. Don’t miss this opportunity to enhance your skills and optimize your workflow!\n\nWe look forward to seeing you there.\n\nBest regards,\nThe Events Team",
      isRead: false,
      sender: "events@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-09T08:20:00Z")
    },
    {
      subject: "Your Subscription is About to Expire",
      body: "We wanted to remind you that your subscription is set to expire on November 1, 2024. To avoid any interruptions in service, please renew your subscription before the expiration date.\n\nBy renewing your subscription, you’ll continue to enjoy access to all premium features, including advanced reporting tools, priority support, and more. If you’re unsure about how to renew or if you need assistance, our support team is ready to help.\n\nThank you for choosing our service. We look forward to continuing to support your success!\n\nRegards,\nThe Billing Team",
      isRead: false,
      sender: "billing@service.com",
      isBookmarked: true,
      createdAt: new Date("2024-10-08T14:50:00Z")
    },
    {
      subject: "Customer Support Satisfaction Survey",
      body: "We hope you had a positive experience with our customer support team recently. We would greatly appreciate it if you could take a few moments to complete a short survey about your experience.\n\nYour feedback helps us understand how we’re doing and identify areas for improvement. Whether your experience was great or you have suggestions for us, we want to hear from you.\n\nThank you in advance for your time and feedback. We value your input and look forward to serving you even better in the future!\n\nBest regards,\nThe Customer Support Team",
      isRead: true,
      sender: "support@service.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-07T18:30:00Z")
    },
    {
      subject: "Upgrade Your Account for More Features",
      body: "We’re excited to let you know about our new premium features, available exclusively to upgraded accounts. These features include advanced data analytics, custom reporting tools, and priority customer support.\n\nUpgrading your account is quick and easy. Simply log in to your account, navigate to the ‘Upgrade’ section, and select the plan that best suits your needs. As a premium user, you’ll also have early access to new features as they’re released.\n\nDon’t miss out on these powerful tools to enhance your experience and take your workflow to the next level!\n\nRegards,\nThe Product Team",
      isRead: false,
      sender: "product@platform.com",
      isBookmarked: true,
      createdAt: new Date("2024-10-06T12:40:00Z")
    },
    {
      subject: "Reminder: Payment Due Soon",
      body: "This is a reminder that your payment for this month’s subscription is due soon. To avoid any disruption in service, please ensure that your payment is processed by October 25, 2024.\n\nYou can review your billing details and payment options in the ‘Billing’ section of your account. If you have any questions about your payment, or if you need to update your billing information, please don’t hesitate to contact our billing department.\n\nThank you for your prompt attention to this matter, and we appreciate your continued business!\n\nSincerely,\nThe Billing Team",
      isRead: true,
      sender: "billing@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-05T10:00:00Z")
    },
    {
      subject: "We Miss You! Come Back to See What's New",
      body: "It’s been a while since we last saw you! We’ve been working hard to improve our platform, and we would love for you to come back and see what’s new.\n\nWe’ve introduced several new features designed to enhance your experience, including personalized recommendations, faster load times, and new integrations with popular third-party tools. Whether you’re managing your workflow or keeping track of important tasks, our updates are sure to help you stay on top of things.\n\nLog in today to explore the latest updates and rediscover why you signed up with us in the first place.\n\nWe hope to see you soon!\n\nBest regards,\nThe Product Team",
      isRead: false,
      sender: "product@platform.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-04T16:45:00Z")
    },
    {
      subject: "Important: Policy Update",
      body: "We wanted to inform you about some important changes to our terms of service and privacy policy. These updates reflect new regulations and improvements we’ve made to our platform to better protect your data.\n\nWe encourage you to review the updated policies in detail. By continuing to use our service after October 31, 2024, you agree to the new terms. If you have any questions or concerns about these updates, our support team is available to assist you.\n\nThank you for your attention to this matter, and we appreciate your continued trust in us.\n\nBest regards,\nThe Legal Team",
      isRead: true,
      sender: "legal@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-03T09:55:00Z")
    },
    {
      subject: "Referral Program: Earn Rewards",
      body: "We’re excited to announce the launch of our referral program! Now, you can earn rewards by inviting your friends and colleagues to join our platform.\n\nFor every new user you refer, you’ll earn points that can be redeemed for discounts, gift cards, and other exclusive benefits. It’s our way of saying thank you for helping us grow the community.\n\nTo get started, simply share your unique referral link with others. The more people you refer, the more rewards you’ll earn!\n\nWe appreciate your support and look forward to rewarding you for spreading the word.\n\nSincerely,\nThe Rewards Team",
      isRead: false,
      sender: "rewards@company.com",
      isBookmarked: false,
      createdAt: new Date("2024-10-02T14:15:00Z")
    }
  ];
  


  try {
    await prisma.email.createMany({
      data: emails,
    });
    console.log('Emails seeded successfully!');
  } catch (error) {
    console.error('Error seeding emails:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seedEmails();
