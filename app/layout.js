import "./globals.css";
import IntercomWidget from './components/IntercomWidget';
import { StepProvider } from "./context/StepContext";

export const metadata = {
  title: "HealthFare",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const user = {
    id: 'user_id', // Replace with actual user ID
    name: 'user_name', // Replace with actual user name
    email: 'user_email', // Replace with actual user email
    createdAt: 'user_created_at', // Replace with actual user created at timestamp
  };

  return (
    <html lang="en">
      <body>
        <StepProvider>
          <IntercomWidget user={user} />
          {children}
        </StepProvider>
      </body>
    </html>
  );
}
