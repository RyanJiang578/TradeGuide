
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable
} from "react-native";

export default function PrivacyPolicyPage({ navigation }) {
    return (
        <View style={styles.background}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                >
                    <Text style={styles.backArrow}>‹</Text>
                </Pressable>

                <Text style={styles.title}>
                    Privacy Policy
                </Text>
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true}
            >
                <Text style={styles.date}>
                    Effective Date: November 3, 2026
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide respects your privacy. This Privacy
                    Policy explains how information is collected,
                    used, stored, and shared when you use the
                    TradeGuide mobile application.
                </Text>

                <Text style={styles.sectionTitle}>
                    1. Information We Collect
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide collects information necessary to
                    provide account management and stock analysis
                    features.

                    {"\n\n"}Account Information:
                    {"\n"}• Email address
                    {"\n"}• Username
                    {"\n"}• Password, stored using secure hashing

                    {"\n\n"}Investment Preferences:
                    {"\n"}• Risk tolerance level (1–5)
                    {"\n"}• Investment timeframe (1–60 months)

                    {"\n\n"}Stock Evaluation Information:
                    {"\n"}• Stock symbols evaluated
                    {"\n"}• Current stock prices
                    {"\n"}• AI-generated price projections
                    {"\n"}• AI-generated analysis
                    {"\n"}• Evaluation dates

                    {"\n\n"}TradeGuide also processes authentication
                    tokens and daily evaluation counts to support
                    account security and usage limits.
                </Text>

                <Text style={styles.sectionTitle}>
                    2. How We Use Information
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide uses collected information to:

                    {"\n\n"}• Create and manage user accounts
                    {"\n"}• Authenticate users
                    {"\n"}• Generate stock evaluations
                    {"\n"}• Apply investment preferences
                    {"\n"}• Display evaluation history
                    {"\n"}• Enforce daily usage limits
                    {"\n"}• Maintain application security
                    {"\n"}• Diagnose technical problems

                    {"\n\n"}Information is used to provide
                    and maintain TradeGuide's services.
                </Text>

                <Text style={styles.sectionTitle}>
                    3. Data Selling and Sharing
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide does not sell users' personal
                    information.

                    {"\n\n"}We do not share personal information
                    with advertisers or third parties for
                    targeted advertising or marketing purposes.

                    {"\n\n"}Limited information is transmitted
                    to service providers when necessary to
                    operate TradeGuide's features.

                    {"\n\n"}Information may also be disclosed
                    when required by applicable law.
                </Text>

                <Text style={styles.sectionTitle}>
                    4. Artificial Intelligence Processing
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide uses OpenRouter to access
                    OpenAI's GPT-4o mini model for stock
                    evaluations.

                    {"\n\n"}Information sent for AI processing
                    may include:

                    {"\n\n"}• Stock name or ticker symbol
                    {"\n"}• Current stock price
                    {"\n"}• User-selected risk tolerance
                    {"\n"}• User-selected investment timeframe

                    {"\n\n"}TradeGuide does not intentionally
                    send account passwords or authentication
                    tokens to the AI provider.

                    {"\n\n"}OpenRouter and the underlying AI
                    model provider process requests according
                    to their applicable data-handling policies.

                    {"\n\n"}OpenRouter Privacy Policy:
                    {"\n"}https://openrouter.ai/privacy
                </Text>

                <Text style={styles.sectionTitle}>
                    5. Financial Market Data
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide uses third-party financial
                    market data providers, including Alpha
                    Vantage, to retrieve stock prices.

                    {"\n\n"}Requests to these providers may
                    contain stock ticker symbols and technical
                    information necessary to process requests.

                    {"\n\n"}TradeGuide does not require users
                    to connect brokerage accounts or provide
                    banking information.
                </Text>

                <Text style={styles.sectionTitle}>
                    6. Evaluation History and Retention
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide displays stock evaluation
                    history from the most recent seven
                    calendar days.

                    {"\n\n"}Older evaluations are no longer
                    displayed in the application.

                    {"\n\n"}Older records may remain stored
                    until removed by the application's
                    database cleanup process or account
                    deletion.

                    {"\n\n"}Account information and user
                    preferences are generally retained while
                    an account remains active.
                </Text>

                <Text style={styles.sectionTitle}>
                    7. Data Security
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide uses security measures
                    intended to protect user information.

                    {"\n\n"}These include password hashing,
                    JWT-based authentication, backend access
                    checks, and secure on-device storage
                    of authentication tokens.

                    {"\n\n"}No electronic system can guarantee
                    complete protection against unauthorized
                    access or security incidents.
                </Text>

                <Text style={styles.sectionTitle}>
                    8. Account Deletion
                </Text>

                <Text style={styles.paragraph}>
                    Users can permanently delete their
                    TradeGuide accounts through the
                    Settings page.

                    {"\n\n"}Account deletion removes the
                    user's account information, saved
                    preferences, and associated stock
                    evaluation history from the application's
                    database, subject to any legally required
                    retention.

                    {"\n\n"}To delete an account, open Settings,
                    select Delete Account, and confirm
                    the deletion request.

                    {"\n\n"}This action cannot be undone.
                </Text>

                <Text style={styles.sectionTitle}>
                    9. Children's Privacy
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide is not directed toward
                    children under the age of 13.

                    {"\n\n"}We do not knowingly collect
                    personal information from children
                    under 13.

                    {"\n\n"}If such information is discovered,
                    we will take appropriate steps to
                    remove it in accordance with applicable
                    legal requirements.
                </Text>

                <Text style={styles.sectionTitle}>
                    10. Changes to This Privacy Policy
                </Text>

                <Text style={styles.paragraph}>
                    TradeGuide may update this Privacy Policy
                    as application functionality, third-party
                    services, or legal requirements change.

                    {"\n\n"}Updated versions will be made
                    available within the application or
                    through an associated website.

                    {"\n\n"}Additional notice will be provided
                    when required by law.
                </Text>

                <Text style={styles.sectionTitle}>
                    11. Contact Information
                </Text>

                <Text style={styles.paragraph}>
                    For privacy-related questions, concerns,
                    or account deletion assistance, please
                    contact TradeGuide through the support
                    email listed in the application's
                    store listing.
                </Text>

                <View style={styles.disclaimer}>
                    <Text style={styles.disclaimerTitle}>
                        Your Privacy Matters
                    </Text>

                    <Text style={styles.disclaimerText}>
                        TradeGuide does not sell user
                        information or share personal
                        information for targeted advertising.

                        {"\n\n"}Account information is used
                        to provide the application's services,
                        and stock evaluation information is
                        shared with AI providers only as
                        necessary to generate evaluations.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#64c3a0",
        paddingTop: 55
    },
    header: {
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 10
    },
    backButton: {
        position: "absolute",
        left: 20,
        padding: 10,
        zIndex: 2
    },
    backArrow: {
        fontSize: 36,
        color: "#1b4332",
        fontWeight: "bold"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1b4332",
        textAlign: "center"
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 14
    },
    scrollContent: {
        padding: 22,
        paddingBottom: 40
    },
    date: {
        fontSize: 13,
        color: "#666666",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1b4332",
        marginTop: 24,
        marginBottom: 10
    },
    paragraph: {
        fontSize: 15,
        lineHeight: 24,
        color: "#333333"
    },
    disclaimer: {
        backgroundColor: "#e8f5ee",
        borderRadius: 10,
        padding: 16,
        marginTop: 30,
        borderLeftWidth: 4,
        borderLeftColor: "#1b4332"
    },
    disclaimerTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#1b4332",
        marginBottom: 10
    },
    disclaimerText: {
        fontSize: 14,
        lineHeight: 23,
        color: "#333333"
    }
});
