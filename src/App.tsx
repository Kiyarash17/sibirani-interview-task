import "./styles/App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl p-6"
      >
        <Card className="border-2">
          <CardHeader>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle className="text-4xl font-bold text-center mb-2">
                Kiyarash Hadidian
              </CardTitle>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-center text-muted-foreground"
            >
              SibIrani Interview Task
            </motion.p>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4 items-center"
            >
              <Button className="w-full" variant="default">
                <Link to="/dashboard" className="w-full">
                  Go to Dashboard
                </Link>
              </Button>
              <Button className="w-full" variant="outline">
                <Link to="/view" className="w-full">
                  Go to Public View
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default App;
