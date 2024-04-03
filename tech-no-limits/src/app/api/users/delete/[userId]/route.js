export default async function handler(req, res) {
    if (req.method === 'DELETE') {
      // Logique de suppression de l'utilisateur
      const userId = req.query.userId;
      try {
        // Supprimer l'utilisateur avec l'ID spécifié
        await prisma.user.delete({
          where: {
            id: userId,
          },
        });
  
        res.status(200).json({ message: 'Utilisateur supprimé avec succès.' });
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'utilisateur.' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  }
  