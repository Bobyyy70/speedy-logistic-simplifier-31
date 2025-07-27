import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Gift, 
  Users, 
  Share2, 
  Copy, 
  Mail, 
  MessageSquare, 
  Trophy,
  Star,
  Zap,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

interface ReferralStats {
  totalReferrals: number;
  successfulReferrals: number;
  totalEarnings: number;
  currentTier: string;
  nextTierProgress: number;
}

interface ReferralReward {
  type: 'discount' | 'cash' | 'credit';
  amount: number;
  description: string;
  tier: string;
}

export const ReferralProgram: React.FC = () => {
  const [referralCode, setReferralCode] = useState('');
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    successfulReferrals: 0,
    totalEarnings: 0,
    currentTier: 'Bronze',
    nextTierProgress: 0
  });
  const [shareMethod, setShareMethod] = useState<'link' | 'email' | 'social'>('link');
  const [customMessage, setCustomMessage] = useState('');
  const { toast } = useToast();

  // Generate unique referral code
  useEffect(() => {
    const generateCode = () => {
      const userId = 'USR' + Math.random().toString(36).substr(2, 6).toUpperCase();
      setReferralCode(`SPEEDELOG-${userId}`);
    };
    generateCode();

    // Mock stats - in real app, fetch from API
    setStats({
      totalReferrals: 8,
      successfulReferrals: 3,
      totalEarnings: 450,
      currentTier: 'Argent',
      nextTierProgress: 60
    });
  }, []);

  const rewards: ReferralReward[] = [
    {
      type: 'discount',
      amount: 20,
      description: 'Réduction sur votre première commande',
      tier: 'Bronze'
    },
    {
      type: 'cash',
      amount: 50,
      description: 'Bonus en cash par parrainage réussi',
      tier: 'Argent'
    },
    {
      type: 'credit',
      amount: 100,
      description: 'Crédit logistique mensuel',
      tier: 'Or'
    }
  ];

  const tiers = [
    { name: 'Bronze', minReferrals: 0, benefits: ['20% réduction', 'Support prioritaire'] },
    { name: 'Argent', minReferrals: 5, benefits: ['50€ par parrainage', 'Audit logistique gratuit'] },
    { name: 'Or', minReferrals: 15, benefits: ['100€ crédit mensuel', 'Account manager dédié'] },
    { name: 'Platine', minReferrals: 30, benefits: ['200€ crédit mensuel', 'Accès beta features'] }
  ];

  const getReferralLink = () => {
    return `${window.location.origin}/?ref=${referralCode}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Copié !',
        description: 'Le lien de parrainage a été copié dans le presse-papier.',
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de copier le lien.',
        variant: 'destructive'
      });
    }
  };

  const shareViaEmail = () => {
    const subject = 'Découvrez Speed E Log - Logistique e-commerce simplifiée';
    const body = `Salut !

J'utilise Speed E Log pour ma logistique e-commerce et c'est fantastique ! 

Leurs services de fulfillment m'ont permis de gagner du temps et d'optimiser mes coûts d'expédition.

Tu peux bénéficier d'une réduction de 20% en utilisant mon lien de parrainage :
${getReferralLink()}

${customMessage ? `\n${customMessage}` : ''}

À bientôt !`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareOnSocial = (platform: 'linkedin' | 'twitter') => {
    const text = `Découvrez Speed E Log, la solution logistique qui transforme votre e-commerce ! ${getReferralLink()}`;
    
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getReferralLink())}&summary=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    };

    window.open(urls[platform], '_blank');
  };

  const getTierIcon = (tierName: string) => {
    switch (tierName) {
      case 'Bronze': return <Trophy className="h-4 w-4 text-orange-600" />;
      case 'Argent': return <Trophy className="h-4 w-4 text-gray-500" />;
      case 'Or': return <Trophy className="h-4 w-4 text-yellow-500" />;
      case 'Platine': return <Star className="h-4 w-4 text-purple-600" />;
      default: return <Trophy className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Gift className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Programme de Parrainage</h2>
        <Badge variant="secondary" className="ml-2">
          <Zap className="h-3 w-3 mr-1" />
          Nouveau
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="share">Partager</TabsTrigger>
          <TabsTrigger value="rewards">Récompenses</TabsTrigger>
          <TabsTrigger value="leaderboard">Classement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Parrainages Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalReferrals}</div>
                <p className="text-xs text-muted-foreground">Invitations envoyées</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.successfulReferrals}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((stats.successfulReferrals / stats.totalReferrals) * 100)}% taux de conversion
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Gains Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.totalEarnings}€</div>
                <p className="text-xs text-muted-foreground">Récompenses cumulées</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-1">
                  {getTierIcon(stats.currentTier)}
                  Niveau {stats.currentTier}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={stats.nextTierProgress} className="mb-2" />
                <p className="text-xs text-muted-foreground">
                  {stats.nextTierProgress}% vers niveau supérieur
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Votre Lien de Parrainage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    value={getReferralLink()} 
                    readOnly 
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => copyToClipboard(getReferralLink())}
                    variant="outline"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Comment ça marche ?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Partagez votre lien unique avec vos contacts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Ils bénéficient d'une réduction de 20% sur leur première commande</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Vous recevez une récompense pour chaque conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="share" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Partager votre lien de parrainage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Message personnalisé (optionnel)</label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Ajoutez un message personnel pour vos contacts..."
                    className="w-full mt-1 p-3 border rounded-md resize-none"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={shareViaEmail}
                      className="w-full h-16 flex-col gap-1"
                      variant="outline"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Par Email</span>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={() => shareOnSocial('linkedin')}
                      className="w-full h-16 flex-col gap-1"
                      variant="outline"
                    >
                      <Users className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={() => shareOnSocial('twitter')}
                      className="w-full h-16 flex-col gap-1"
                      variant="outline"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Twitter</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier, index) => (
              <Card key={tier.name} className={stats.currentTier === tier.name ? 'ring-2 ring-primary' : ''}>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    {getTierIcon(tier.name)}
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {tier.minReferrals} parrainages+
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  {stats.currentTier === tier.name && (
                    <Badge className="mt-2 w-full justify-center">Niveau Actuel</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Parrains du Mois</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { rank: 1, name: 'Marie D.', referrals: 23, earnings: 1150 },
                  { rank: 2, name: 'Thomas L.', referrals: 19, earnings: 950 },
                  { rank: 3, name: 'Sophie M.', referrals: 15, earnings: 750 },
                  { rank: 4, name: 'Vous', referrals: stats.successfulReferrals, earnings: stats.totalEarnings },
                  { rank: 5, name: 'Pierre K.', referrals: 8, earnings: 400 }
                ].map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.name === 'Vous' ? 'bg-primary/10 border' : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        user.rank === 1 ? 'bg-yellow-500 text-white' :
                        user.rank === 2 ? 'bg-gray-400 text-white' :
                        user.rank === 3 ? 'bg-orange-600 text-white' :
                        'bg-muted-foreground text-white'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.referrals} parrainages réussis
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.earnings}€</p>
                      <p className="text-sm text-muted-foreground">gagné</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};