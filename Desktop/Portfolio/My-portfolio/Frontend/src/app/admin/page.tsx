"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, User, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Timestamp | null;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs: Message[] = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(msgs);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">Message Center</h1>
            <p className="text-muted-foreground">Manage and respond to inquiries from your portfolio.</p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-sm border">
              <CardHeader className="border-b bg-muted/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-primary" size={20} />
                    <CardTitle className="text-xl">Incoming Messages</CardTitle>
                  </div>
                  <Badge variant="secondary" className="font-bold">
                    {messages.length} Total
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="p-12 text-center text-muted-foreground">
                    <Clock className="animate-spin mx-auto mb-4" size={32} />
                    Loading messages...
                  </div>
                ) : messages.length === 0 ? (
                  <div className="p-12 text-center text-muted-foreground">
                    No messages received yet.
                  </div>
                ) : (
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[200px]">Sender</TableHead>
                        <TableHead className="w-[250px]">Subject</TableHead>
                        <TableHead>Message Preview</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((msg) => (
                        <TableRow key={msg.id} className="hover:bg-muted/30 transition-colors">
                          <TableCell className="font-medium">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1.5 font-bold">
                                <User size={14} className="text-primary" />
                                {msg.name}
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Mail size={12} />
                                {msg.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium text-sm">{msg.subject}</span>
                          </TableCell>
                          <TableCell>
                            <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                              {msg.message}
                            </p>
                          </TableCell>
                          <TableCell className="text-right text-xs text-muted-foreground">
                            {msg.createdAt ? msg.createdAt.toDate().toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            }) : 'Just now'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}