
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function TOSPage({ navigation }) {
    return (
        <View style={styles.background}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backArrow}>‹</Text>
                </Pressable>

                <Text style={styles.title}>
                    Terms of Service
                </Text>
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true}
            >
                <Text style={styles.date}>
                    Effective Date: 11/3/2026
                </Text>

                <Text style={styles.paragraph}>
                    Welcome to TradeGuide. These Terms of Service govern
                    your access to and use of the TradeGuide mobile
                    application. By creating an account or using the
                    application, you agree to these terms.
                </Text>

                <Text style={styles.sectionTitle}>
                    1. Description of Services
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide is an AI-powered stock analysis application
                    designed for educational and informational purposes.
                    It allows users to search for stocks, receive
                    AI-generated evaluations, view estimated future stock
                    prices, and review previous evaluations.
                    TradeGuide does not execute trades, manage investments,
                    or hold users' funds.
                </Text>

                <Text style={styles.sectionTitle}>
                    2. Educational and Informational Purposes
                </Text>
                <Text style={styles.paragraph}>
                    All information provided by TradeGuide is for
                    educational and general informational purposes only.
                    TradeGuide does not provide professional financial,
                    investment, tax, or legal advice.

                    {"\n\n"}Users should conduct independent research and
                    consider consulting a qualified financial professional
                    before making investment decisions.
                </Text>

                <Text style={styles.sectionTitle}>
                    3. AI-Generated Analysis
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide uses artificial intelligence to generate
                    stock evaluations and estimated future prices.

                    {"\n\n"}AI-generated predictions are speculative estimates
                    and are not guaranteed outcomes. They may be inaccurate,
                    incomplete, outdated, or inconsistent.

                    {"\n\n"}Actual stock prices may differ significantly
                    from projected values. Past performance does not
                    guarantee future results.

                    {"\n\n"}Users should not rely exclusively on TradeGuide
                    when making investment decisions.
                </Text>

                <Text style={styles.sectionTitle}>
                    4. Market Data Accuracy
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide may obtain stock prices and financial
                    information from third-party providers.

                    {"\n\n"}This information may be delayed, incomplete,
                    inaccurate, or temporarily unavailable.

                    {"\n\n"}TradeGuide does not guarantee that displayed
                    prices represent real-time market values or prices
                    at which securities can be traded.
                </Text>

                <Text style={styles.sectionTitle}>
                    5. User Accounts
                </Text>
                <Text style={styles.paragraph}>
                    Users are responsible for maintaining the
                    confidentiality of their account credentials.

                    {"\n\n"}Users agree to provide accurate account
                    information and to refrain from accessing other
                    users' accounts without authorization.
                </Text>

                <Text style={styles.sectionTitle}>
                    6. Usage Limits
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide currently limits users to 25 stock
                    evaluations per day.

                    {"\n\n"}We may modify these limits or temporarily
                    restrict access to maintain service availability,
                    security, and reliability.
                </Text>

                <Text style={styles.sectionTitle}>
                    7. Acceptable Use
                </Text>
                <Text style={styles.paragraph}>
                    Users agree not to bypass authentication or usage
                    restrictions, attempt unauthorized access, interfere
                    with application services, or use TradeGuide for
                    fraudulent or unlawful activities.

                    {"\n\n"}Users may not redistribute third-party market
                    data in violation of applicable licensing terms.
                </Text>

                <Text style={styles.sectionTitle}>
                    8. Third-Party Services
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide relies on third-party services for
                    financial data and AI-generated evaluations.

                    {"\n\n"}These services may experience outages,
                    rate limits, technical errors, or changes in
                    availability.

                    {"\n\n"}Stock evaluation requests may be processed
                    by third-party AI providers as described in
                    our Privacy Policy.
                </Text>

                <Text style={styles.sectionTitle}>
                    9. Privacy and Data
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide collects information necessary for
                    account management and application functionality,
                    which may include email addresses, usernames,
                    investment preferences, and evaluation history.

                    {"\n\n"}For more information about data collection,
                    processing, retention, and user rights, please
                    refer to our separate Privacy Policy.
                </Text>

                <Text style={styles.sectionTitle}>
                    10. Intellectual Property
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide's original software, design, branding,
                    and other proprietary materials belong to their
                    respective rights holders.

                    {"\n\n"}Third-party company names, trademarks,
                    and financial data remain subject to the rights
                    of their respective owners.
                </Text>

                <Text style={styles.sectionTitle}>
                    11. Service Availability
                </Text>
                <Text style={styles.paragraph}>
                    TradeGuide is provided on an as-available basis.

                    {"\n\n"}We may modify, suspend, or discontinue
                    features due to technical, operational, security,
                    financial, or legal considerations.

                    {"\n\n"}We do not guarantee uninterrupted or
                    error-free operation.
                </Text>

                <Text style={styles.sectionTitle}>
                    12. Disclaimer of Warranties
                </Text>
                <Text style={styles.paragraph}>
                    To the maximum extent permitted by applicable law,
                    TradeGuide is provided "AS IS" and "AS AVAILABLE"
                    without warranties of any kind.

                    {"\n\n"}We do not guarantee the accuracy of AI
                    predictions, completeness of market information,
                    or profitability of any investment.
                </Text>

                <Text style={styles.sectionTitle}>
                    13. Limitation of Liability
                </Text>
                <Text style={styles.paragraph}>
                    To the maximum extent permitted by applicable law,
                    TradeGuide and its developer are not responsible
                    for indirect, incidental, consequential, or
                    special damages arising from use of the application,
                    including investment losses related to reliance
                    on AI-generated evaluations.

                    {"\n\n"}Nothing in these terms excludes liability
                    that cannot legally be excluded.
                </Text>

                <Text style={styles.sectionTitle}>
                    14. Account Termination
                </Text>
                <Text style={styles.paragraph}>
                    We may suspend or terminate accounts that violate
                    these terms or create security risks.

                    {"\n\n"}Users may request account deletion through
                    the contact information provided below, subject
                    to applicable data retention requirements.
                </Text>

                <Text style={styles.sectionTitle}>
                    15. Changes to These Terms
                </Text>
                <Text style={styles.paragraph}>
                    These Terms of Service may be updated to reflect
                    changes in TradeGuide, applicable laws, or
                    operational practices.

                    {"\n\n"}Updated terms will be made available
                    through the application or an associated website.
                    Additional notice or consent will be provided
                    where required by law.
                </Text>
                <Text style={styles.sectionTitle}>
                    16. Contact Information
                </Text>
                <Text style={styles.paragraph}>
                    For questions or concerns regarding these terms,
                    contact:{"\n\n"}ryanjiang578@gmail.com
                </Text>

                <View style={styles.disclaimer}>
                    <Text style={styles.disclaimerTitle}>
                        Important Financial Disclaimer
                    </Text>

                    <Text style={styles.disclaimerText}>
                        TradeGuide provides educational stock analysis
                        only. AI-generated forecasts are estimates,
                        not guaranteed predictions or professional
                        investment recommendations.

                        {"\n\n"}Investing involves risk, including
                        the possible loss of principal. Always
                        conduct independent research before making
                        financial decisions.
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
